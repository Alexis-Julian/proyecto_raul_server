export const viewProducts = (product) => {
  const { _id, category, code, description, price, status, stock, title, thumbnails, author } = product;
  const { username, email, img } = author[0].owner;

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
    <div href="#"  class="w-1/3 relative  cursor-pointer flex flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
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
                    <div class="">
                        <p class="text-primary-color font-extrabold">Created by: ${username ? username : 'Undefined'} </p>
                    </div>
                    <div class="flex-grow">
                        <div class="flex items-center h-full p-3">
                            <div class="info_user">
                                <img src=${img ? img : '/image/profile.png'} class="z-20 rounded-full"  height="150" width="150"/>
                                <div class="blur_img -z-40"></div>
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
