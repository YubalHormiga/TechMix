<script setup></script>

<template>
  <div class="flex flex-col lg:flex-row lg:h-screen gap-4 p-6 max-w-[1366px] mx-auto my-10 px-4">
    <!-- Contenido principal: 75% en pantallas grandes, ancho completo en pequeñas -->
    <main class="flex flex-col flex-1 gap-4 lg:w-2/3">
      <div class="flex justify-center flex-1 gap-1 px-6 py-5">
        <div class="layout-content-container flex flex-col max-w-[920px] flex-1">
          <div class="px-4 py-3">
            <div
              class="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[318px]"
              style="
                background-image:
                  linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%),
                  url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBf7BHJeFEaKNrcW-UbH41HNHCBkJrLvvMWYSvWp3biOQVWG9EugihZ8RL8Witf66Jd9uUlfJ1-cf1cfT-KVwsprmVc6Ca5W-vxfcJT0UeuOtMcl4tRhv7Qu1fTb2BGlV5PcGH8RuFV_qfI20nraDDNOT3M7WTi2zIULCqUPv1IjmHeJCEtZxqxXoIsrnbmS5J2Qx22DylKtrgH0d1JbPNZFPBKJIcgiFX-1BXNhGMsXeBHt6dCSvdctYMCP0CMYayF5ohb1MROfs');
              "
            ></div>
          </div>

          <h1
            class="text-[#121416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5"
          >
            Mooring in the heart of the harbor
          </h1>

          <p class="text-[#121416] text-base font-normal leading-normal pb-3 pt-1 px-4">
            This prime mooring spot offers unparalleled access to the harbor's vibrant scene. Enjoy
            stunning views and easy access to all amenities. Perfect for vessels up to 45 feet.
          </p>

          <h3
            class="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
          >
            Admitted Boat Types
          </h3>
          <div class="p-4 grid grid-cols-[20%_1fr] gap-x-6">
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <p class="text-[#6a7581] text-sm font-normal leading-normal">Length Limit</p>
              <p class="text-[#121416] text-sm font-normal leading-normal">Max 45ft</p>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <p class="text-[#6a7581] text-sm font-normal leading-normal">Max Draft</p>
              <p class="text-[#121416] text-sm font-normal leading-normal">10ft</p>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <p class="text-[#6a7581] text-sm font-normal leading-normal">Boat Types</p>
              <p class="text-[#121416] text-sm font-normal leading-normal">Sailboats, Motorboats</p>
            </div>
          </div>

          <h3
            class="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
          >
            Mooring Characteristics
          </h3>
          <div class="p-4 grid grid-cols-[20%_1fr] gap-x-6">
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <p class="text-[#6a7581] text-sm font-normal leading-normal">Type</p>
              <p class="text-[#121416] text-sm font-normal leading-normal">Fixed</p>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <p class="text-[#6a7581] text-sm font-normal leading-normal">Depth</p>
              <p class="text-[#121416] text-sm font-normal leading-normal">20ft</p>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <p class="text-[#6a7581] text-sm font-normal leading-normal">Width</p>
              <p class="text-[#121416] text-sm font-normal leading-normal">15ft</p>
            </div>
            <div class="col-span-2 grid grid-cols-subgrid border-t border-t-[#dde0e3] py-5">
              <p class="text-[#6a7581] text-sm font-normal leading-normal">Mooring System</p>
              <p class="text-[#121416] text-sm font-normal leading-normal">Chain & Buoy</p>
            </div>
          </div>

          <h3
            class="text-[#121416] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4"
          >
            Included Services
          </h3>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <!-- Iconos y servicios -->
            <div
              class="flex flex-1 gap-3 rounded-lg border border-[#dde0e3] bg-white p-4 items-center"
            >
              <div
                class="text-[#121416]"
                data-icon="Lightning"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"
                  ></path>
                </svg>
              </div>
              <h2 class="text-[#121416] text-base font-bold leading-tight">Electricity</h2>
            </div>

            <div
              class="flex flex-1 gap-3 rounded-lg border border-[#dde0e3] bg-white p-4 items-center"
            >
              <div class="text-[#121416]" data-icon="Water" data-size="24px" data-weight="regular">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M128 24C95 77 71 119 71 152c0 32 57 80 57 80s57-48 57-80c0-33-24-75-57-128z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                </svg>
              </div>
              <h2 class="text-[#121416] text-base font-bold leading-tight">Water Supply</h2>
            </div>

            <div
              class="flex flex-1 gap-3 rounded-lg border border-[#dde0e3] bg-white p-4 items-center"
            >
              <div class="text-[#121416]" data-icon="WiFi" data-size="24px" data-weight="regular">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <circle cx="128" cy="192" r="12" />
                  <path
                    d="M88 160a48 48 0 0 1 80 0"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                  <path
                    d="M56 128a80 80 0 0 1 144 0"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  />
                </svg>
              </div>
              <h2 class="text-[#121416] text-base font-bold leading-tight">WiFi</h2>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Sidebar: 25% en pantallas grandes, centrado en pequeñas -->
    <aside class="flex flex-col w-full gap-6 lg:w-1/3 max-w-[400px] mx-auto lg:mx-0 mt-8">
      <div class="bg-white rounded-xl border border-[#dde0e3] shadow-sm p-6 select-none">
        <!-- Calendario sencillo -->
        <div class="mb-4 text-sm font-semibold text-center text-gray-500 select-none">
          Calendario
        </div>
        <div class="grid grid-cols-7 gap-1 text-xs text-center text-gray-400 select-none">
          <div>Dom</div>
          <div>Lun</div>
          <div>Mar</div>
          <div>Mié</div>
          <div>Jue</div>
          <div>Vie</div>
          <div>Sáb</div>
          <div class="text-gray-300">28</div>
          <div class="text-gray-300">29</div>
          <div class="text-gray-300">30</div>
          <div class="text-gray-300">31</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>21</div>
          <div>22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          <div>31</div>
          <div class="text-gray-300">1</div>
          <div class="text-gray-300">2</div>
          <div class="text-gray-300">3</div>
        </div>
      </div>

      <button
        class="py-4 font-bold text-white bg-[#121416] rounded-xl shadow-md hover:bg-[#2a2e33] transition-colors duration-300"
      >
        Reservar
      </button>
    </aside>
  </div>
</template>
