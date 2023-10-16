export const viewProducts = (product) => {
  const { category, code, description, price, status, stock, title, thumbnails, author } = product;
  const { username, email, img, role } = author[0].owner;

  const image = new Image();

  image.src = thumbnails;

  image.onload = function () {
    const classNameImage = ['bg-cover', 'bg-center', 'h-full', 'w-full'];
    const div = document.getElementById(code);
    div.innerHTML = '';
    div.classList.remove('loader_old');
    div.classList.add(...classNameImage);
    div.style.backgroundImage = 'url(' + thumbnails + ')';
  };

  return `
    <div href="#" data-aos="zoom-in"  class="w-1/3 relative  cursor-pointer flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div class="img_product flex items-center justify-center">
            <div class="loader_old" id="${code}">..</div>
        </div>
        <div class="flip-box relative" >
        <div class="absolute h-full w-full  bg-none top-0"></div>
            <div class="flip-box-inner ">
                <div class="flip-box-front   flex flex-col justify-between p-4 leading-normal">
                    <div class="absolute flex top-0 left-0 text-sm text-black pl-2"><h5 class="font-extrabold">Category:</h5>&nbsp; ${category}</div>
                    <h5 class=" mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">${title}</h5>
                    <div class="grid grid-rows-2 grid-cols-2  h-full">
                        <div class="flex flex-col justify-center">
                            <p class="font-extrabold">Code</p>
                            <p class="">${code}</p>
                        </div>
                        <div class="flex flex-col justify-center">
                            <p class="font-extrabold">Stock</p>
                            <p class="">${stock}</p>
                        </div>
                        <div class="flex flex-col justify-center">
                            <p class="font-extrabold">Status</p>
                            <p class=" ${status ? 'text-green-900 uppercase font-extrabold' : 'text-red-700 uppercase'}">${status}</p>
                        </div>
                        <div class="flex flex-col justify-center">
                            <p class="font-extrabold">Price</p>
                            <p class="">$${price}</p>
                        </div>
                    </div>
                    <p class="text-black mb-3 font-normal  dark:text-gray-400">${description}</p>
                </div>
                <div class="flip-box-back h-full flex flex-col">
                    <div class="pt-3">
                        <p class="text-primary-color font-extrabold">Created by: ${username ? username : 'Undefined'} </p>
                    </div>
                    <div class="flex-grow">
                        <div class="grid items-center justify-center h-full w-full   ">
                            <div class="mx-auto">
                                <div class="info_user">
                                    <img src=${img ? img : '/image/profile.png'} class="z-20 rounded-full"  height="150" width="150"/>
                                    <div class="blur_img -z-40"></div>
                                </div>
                            </div>
                            <div class="grid  grid-rows-2 gap-3 p-3 ">
                                <span class="flex flex-col">
                                    <p class="underline tracking-wider font-semibold">Email</p>
                                    <p class="text-sm font-semibold text-secondary-color">${email}</p>
                                </span>
                                <span class="flex flex-col">
                                    <p class="underline tracking-wider font-semibold">Role</p>
                                    <p class="text-sm font-semibold text-secondary-color">${role}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-end justify-center gap-5 h-1/5">
                        <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Comunicarse</button>
                        <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
};

export const viewLoading = () => {
  return `<span class="loader"></span>`;
};

export const viewTableHeaders = () => {
  return ` 
        <div class="flex items-center justify-between p-2  ">
            <div>
                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                    <span class="sr-only">Action button</span>
                    Action
                    <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                        </li>
                    </ul>
                    <div class="py-1">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                    </div>
                </div>
            </div>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users">
            </div>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead class="text-xs text-white uppercase  dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checkbox-all-search" class="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Role
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody id="container_user"   data-aos="fade-right" class="body_user ">
            </tbody>
        </table>
    </div>`;
};

export const viewTableUser = (user) => {
  const { email, img, role, username } = user;
  console.log(img);
  return `
        <td class="w-4 p-4">
            <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
        </td>
        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
            <img class="w-10 h-10 rounded-full" src=${img ? img : '/image/notfound.png'}>
            <div class="pl-3">
                <div class="text-base font-semibold text-quaternary-color">${username}</div>
                <div class="font-normal text-gray-500">${email}</div>
            </div>  
        </th>
        <td class="px-6 py-4">
            ${role}
        </td>
        <td class="px-6 py-4">
            <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-red-600 mr-2"></div> Offline
            </div>
        </td>
        <td class="px-6 py-4">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
        </td>
 
`;
};

/*   <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">		
        
    </tr> */
