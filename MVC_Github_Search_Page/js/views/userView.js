// this file have the function that will build the new
// html page when we get the user data

import { elements } from "./base.js";
/*
    the renderUser function will render the User Profile
    in the element.profile in the DOM 
*/
export const renderUser=(
    avatar_url,
    html_url,
    public_repos,
    followers,
    following,
)=>{
    const markup=`
    <div class="profile-header">
      <img src="${avatar_url}" alt="Avatar">
      <a href="${html_url}" target="_blank">Visitar perfil</a>
    </div>   
    <ul class="profile-list">
      <li>Repositórios: ${public_repos}</li>
      <li>Seguidores: ${followers}</li>
      <li>Seguindo: ${following}</li>
    </ul> 
    `;
    elements.profile.insertAdjacentHTML("afterbegin",markup);
}