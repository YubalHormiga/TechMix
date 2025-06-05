<template>
  <h2 class="text-[#121416] text-3xl md:text-4xl font-bold md:font-black px-4 pb-3 pt-5">
    Mapa Interactivo
  </h2>
  <div class="container flex flex-col flex-1 h-full gap-10 px-4 py-10">
    <div class="flex flex-col flex-1 md:px-4 md:py-3">
      <div
        class="bg-cover bg-center flex min-h-[320px] flex-1 flex-col justify-between px-4 pb-4 pt-5 md:rounded-xl md:px-8 md:pb-6 md:pt-8"
        style="background-image: url('map_image_url')"
      >
        <label class="flex flex-col h-12 min-w-40">
          <div class="flex items-stretch flex-1 w-full h-full rounded-xl">
            <div
              class="text-[#6a7581] flex border-none bg-white items-center justify-center pl-4 rounded-l-xl border-r-0"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
            ></div>
            <input
              placeholder="Buscar ubicaciones"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#121416] focus:outline-0 focus:ring-0 border-none bg-white focus:border-none h-full placeholder:text-[#6a7581] px-4 rounded-l-none border-l-0 pl-2 text-base md:text-lg font-normal"
              value=""
            />
          </div>
        </label>

        <div class="flex flex-col items-end gap-3">
          <div class="flex flex-col gap-0.5">
            <button
              class="flex size-10 items-center justify-center rounded-t-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
            >
              <div
                class="text-[#121416]"
                data-icon="Plus"
                data-size="24px"
                data-weight="regular"
              ></div>
            </button>
            <button
              class="flex size-10 items-center justify-center rounded-b-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
            >
              <div
                class="text-[#121416]"
                data-icon="Minus"
                data-size="24px"
                data-weight="regular"
              ></div>
            </button>
          </div>
          <button
            class="flex size-10 items-center justify-center rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
          >
            <div
              class="text-[#121416]"
              data-icon="NavigationArrow"
              data-size="24px"
              data-weight="regular"
            ></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
