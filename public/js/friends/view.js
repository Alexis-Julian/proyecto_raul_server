export function RenderCard(user) {
  return `
    <div  data-aos="flip-up" class='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <div class='flex justify-end px-4 pt-4'>
            <button
            id='dropdownButton'
            data-dropdown-toggle='dropdown'
            class='inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5'
            type='button'
            >
            <span class='sr-only'>Open dropdown</span>
            <svg class='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 3'>
                <path d='M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z' />
            </svg>
            </button>
            <!-- Dropdown menu -->
            <div id='dropdown' class='z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
            <ul class='py-2' aria-labelledby='dropdownButton'>
                <li>
                <a href='#' class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Edit</a>
                </li>
                <li>
                <a href='#' class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Export Data</a>
                </li>
                <li>
                <a href='#' class='block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Delete</a>
                </li>
            </ul>
            </div>
        </div>
        <div class='flex flex-col items-center pb-10'>
            <img class='w-24 h-24 mb-3 rounded-full shadow-lg' src="${user.img ? user.img : '/image/notfound.png'}" alt='Bonnie image' />
            <h5 class='mb-1 text-xl font-medium text-gray-900 dark:text-white'>${user.username}</h5>
            <span class='text-sm text-gray-500 dark:text-gray-400'>${user.email}</span>
            <div class='flex mt-4 space-x-3 md:mt-6'>
            <button
                class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                name="${user._id}"
            >View profile</button>
            <button
                class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
                name="${user._id}"
            >Send friend</button>
        </div>
    </div>`;
}

//Buscar la manera de paramterizar estas lineas
export function RenderCardFriend(user) {
  return `
      <div  data-aos="flip-up" class='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div class='flex justify-end px-4 pt-4'>
              <button
              id='dropdownButton'
              data-dropdown-toggle='dropdown'
              class='inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5'
              type='button'
              >
              <span class='sr-only'>Open dropdown</span>
              <svg class='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 3'>
                  <path d='M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z' />
              </svg>
              </button>
              <!-- Dropdown menu -->
              <div id='dropdown' class='z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
              <ul class='py-2' aria-labelledby='dropdownButton'>
                  <li>
                  <a href='#' class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Edit</a>
                  </li>
                  <li>
                  <a href='#' class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Export Data</a>
                  </li>
                  <li>
                  <a href='#' class='block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Delete</a>
                  </li>
              </ul>
              </div>
          </div>
          <div class='flex flex-col items-center pb-10'>
              <img class='w-24 h-24 mb-3 rounded-full shadow-lg' src="${user.img ? user.img : '/image/notfound.png'}" alt='Bonnie image' />
              <h5 class='mb-1 text-xl font-medium text-gray-900 dark:text-white'>${user.username}</h5>
              <span class='text-sm text-gray-500 dark:text-gray-400'>${user.email}</span>
              <div class='flex mt-4 space-x-3 md:mt-6'>
              <button
                  class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  name="${user._id}"
              >View profile</button>
              <button
                  class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
                  name="${user._id}"
              >Delete friend</button>
          </div>
      </div>`;
}

//Buscar la manera de paramterizar estas lineas
export function RenderCardRequest(user) {
  return `
        <div  data-aos="flip-up" class='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <div class='flex justify-end px-4 pt-4'>
                <button
                id='dropdownButton'
                data-dropdown-toggle='dropdown'
                class='inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5'
                type='button'
                >
                <span class='sr-only'>Open dropdown</span>
                <svg class='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 16 3'>
                    <path d='M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z' />
                </svg>
                </button>
                <!-- Dropdown menu -->
                <div id='dropdown' class='z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
                <ul class='py-2' aria-labelledby='dropdownButton'>
                    <li>
                    <a href='#' class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Edit</a>
                    </li>
                    <li>
                    <a href='#' class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Export Data</a>
                    </li>
                    <li>
                    <a href='#' class='block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Delete</a>
                    </li>
                </ul>
                </div>
            </div>
            <div class='flex flex-col items-center pb-10'>
                <img class='w-24 h-24 mb-3 rounded-full shadow-lg' src="${user.img ? user.img : '/image/notfound.png'}" alt='Bonnie image' />
                <h5 class='mb-1 text-xl font-medium text-gray-900 dark:text-white'>${user.username}</h5>
                <span class='text-sm text-gray-500 dark:text-gray-400'>${user.email}</span>
                <div class='flex mt-4 space-x-3 md:mt-6'>
                <button
                    class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    name="${user._id}"
                >View profile</button>
                <button
                    class='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
                    name="${user._id}"
                >Cancel request</button>
            </div>
        </div>`;
}
