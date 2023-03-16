//the index file represents the Controller in MVC
import {User} from "./modules/user.js";
import { Repo } from "./modules/repo.js";

import * as userView from "./views/userView.js";
import * as repoView from "./views/repoView.js";

import {clearUI, elements} from "./views/base.js";

const state={};

const controlFavoriteRepositories= async (url)=>{
    try{
        state.repositories= new Repo(url);

        await state.repositories.getRepositories();

        repoView.renderRepositories(state.repositories.repos);
    } catch(error){
        console.log(error);
    }
};

const controlSearch= async (event)=>{
    event.preventDefault();
    try{
        const searched = elements.input.value;

        state.user= new User(searched);

        await state.user.getUser();

        clearUI();

        console.log("state.user is: "+state.user)

        userView.renderUser(state.user);
        
        await controlFavoriteRepositories(state.user.starred_url);

        elements.input.value="";
    }catch(error){
        console.log(error);
    }
};

window.addEventListener("submit", controlSearch);
window.addEventListener("load", controlSearch);