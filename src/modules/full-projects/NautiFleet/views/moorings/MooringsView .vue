<script setup></script>

<template>
  <div class="flex justify-center flex-1 px-40 py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div class="@container">
        <div class="@[480px]:p-4">
          <div
            class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style="
              background-image:
                linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%),
                url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcVQh7ihWNjBrTJgdeqoWoKOoHjr3H2qk8QZDVpf4aUwrEZfeJ8KLxSG2QoSRWvFtSQaYbY0XcnMmSH8aF9QY9qoWEnP-SHbkyj1O_UWsI9ldGkmu4sbV2cnbNjf0CZz4tteimAtvZLoFMHJJBVKt7wAVBkQnbbzwgGsVoY71MeQ_MbDoGGMfNgVoQrPowazNbQbeL3i5aQLjOyRtzV-0WDBt3px_pooGq0XH4BmuVC1uidpoI81MfDdqmaAk3ZSmYK2yurDB9eVg');
            "
          >
            <div class="flex flex-col gap-2 text-center">
              <h1
                class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              >
                Find Your Perfect Mooring
              </h1>
              <h2
                class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
              >
                Discover a wide selection of moorings in stunning locations. Whether you're looking
                for a short-term stay or a long-term solution, we have the perfect spot for your
                vessel.
              </h2>
            </div>
            <button
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b79ee] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            >
              <span class="truncate">Explore Moorings</span>
            </button>
          </div>
        </div>
      </div>

      <h2
        class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
      >
        Why Choose NauticalEase for Your Mooring Needs?
      </h2>
      <div class="flex flex-col gap-10 px-4 py-10 @container">
        <div class="flex flex-col gap-4">
          <h1
            class="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
          >
            Benefits of Using Our Platform
          </h1>
          <p class="text-[#111418] text-base font-normal leading-normal max-w-[720px]">
            Discover the advantages of finding your ideal mooring through NauticalEase. We offer a
            seamless and secure experience, connecting you with a wide range of options to suit your
            needs.
          </p>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
          <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
            <div class="text-[#111418]" data-icon="Anchor" data-size="24px" data-weight="regular">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M216,136a8,8,0,0,0-8,8,40,40,0,0,1-40,40,47.79,47.79,0,0,0-32,12.27V128h32a8,8,0,0,0,0-16H136V87a32,32,0,1,0-16,0v25H88a8,8,0,0,0,0,16h32v68.27A47.79,47.79,0,0,0,88,184a40,40,0,0,1-40-40,8,8,0,0,0-16,0,56.06,56.06,0,0,0,56,56,32,32,0,0,1,32,32,8,8,0,0,0,16,0,32,32,0,0,1,32-32,56.06,56.06,0,0,0,56-56A8,8,0,0,0,216,136ZM112,56a16,16,0,1,1,16,16A16,16,0,0,1,112,56Z"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-[#111418] text-base font-bold leading-tight">Extensive Selection</h2>
              <p class="text-[#60758a] text-sm font-normal leading-normal">
                Access a vast network of moorings, from small private docks to large marina berths.
              </p>
            </div>
          </div>
          <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
            <div class="text-[#111418]" data-icon="MapPin" data-size="24px" data-weight="regular">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-[#111418] text-base font-bold leading-tight">Prime Locations</h2>
              <p class="text-[#60758a] text-sm font-normal leading-normal">
                Find moorings in the most sought-after coastal destinations, with easy access to
                amenities.
              </p>
            </div>
          </div>
          <div class="flex flex-1 gap-3 rounded-lg border border-[#dbe0e6] bg-white p-4 flex-col">
            <div
              class="text-[#111418]"
              data-icon="ShieldCheck"
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
                  d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col gap-1">
              <h2 class="text-[#111418] text-base font-bold leading-tight">Secure Transactions</h2>
              <p class="text-[#60758a] text-sm font-normal leading-normal">
                Our platform ensures secure and transparent transactions, protecting both boat
                owners and mooring providers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="@container">
        <div
          class="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20"
        >
          <div class="flex flex-col gap-2 text-center">
            <h1
              class="text-[#111418] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
            >
              Ready to Secure Your Mooring?
            </h1>
            <p class="text-[#111418] text-base font-normal leading-normal max-w-[720px">
              Sign up today to start exploring available moorings and connect with our community of
              boat owners and providers.
            </p>
          </div>
          <div class="flex justify-center flex-1">
            <div class="flex justify-center">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b79ee] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow"
              >
                <span class="truncate">Create an Account</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2
        class="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
      >
        Need Assistance?
      </h2>
      <p class="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
        Our support team is here to help you find the perfect mooring. Contact us for personalized
        assistance and answers to your questions.
      </p>
      <div class="flex justify-center px-4 py-3">
        <button
          class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span class="truncate">Contact Support</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
