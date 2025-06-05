<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
    <div class="rounded">
      <div class="space-y-2">
        <img
          src="https://source.unsplash.com/random/480x360/?4"
          alt=""
          class="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div class="flex items-center text-xs">
          <span>6 min ago</span>
        </div>
      </div>
    </div>
    <div class="rounded lg:col-span-2">
      <div class="space-y-2">
        <a rel="noopener noreferrer" href="#" class="block">
          <h3 class="text-xl font-semibold dark:text-violet-600">
            Facere ipsa nulla corrupti praesentium pariatur architecto
          </h3>
        </a>
        <p class="leading-snug dark:text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.
        </p>
      </div>
    </div>
    <div class="rounded">
      <div class="flex flex-col justify-between p-6 space-y-8">
        <div class="space-y-2">
          <h2 class="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
          <p class="dark:text-gray-800">
            Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
          </p>
        </div>
        <button
          type="button"
          class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
        >
          Read more
        </button>
      </div>
    </div>
  </div>
</template>
