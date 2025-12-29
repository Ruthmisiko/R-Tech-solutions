<script setup>
    import { ref } from 'vue'
    
    const isOpen = ref(false)
    
    const menuItems = [
      { name: 'Home', link: '#' },
      { name: 'About Us', link: '#about' },
      { name: 'Services', link: '#services' },
      { name: 'Projects', link: '#projects' },
      { name: 'Testimonials', link: '#testimonials' },
      { name: 'Contact', link: '#contact' },
    ]
    </script>
    
    <template>
      <header class="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex items-center justify-between h-16">
            
            <!-- Logo -->
            <div class="flex items-center gap-3">
             
              <span class="text-xl font-bold text-greenDark">
                R-Tech Solutions
              </span>
            </div>
    
            <!-- Desktop Menu -->
            <nav class="hidden md:flex items-center space-x-2">
              <a
                v-for="item in menuItems"
                :key="item.name"
                :href="item.link"
                class="px-4 py-2 rounded-md text-sm font-medium text-gray-700
                       hover:bg-greenLight hover:text-greenDark
                       transition duration-200"
              >
                {{ item.name }}
              </a>
    
              <!-- CTA Button -->
              <a
                href="#contact"
                class="ml-4 px-5 py-2 rounded-md bg-greenMain text-white font-semibold
                       hover:bg-greenDark transition duration-200"
              >
                Get a Quote
              </a>
            </nav>
    
            <!-- Mobile Menu Button -->
            <button
              @click="isOpen = !isOpen"
              class="md:hidden text-greenDark focus:outline-none"
            >
              <svg class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2"
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
    
        <!-- Mobile Menu -->
        <div v-if="isOpen" class="md:hidden bg-white border-t">
          <nav class="flex flex-col px-6 py-4 space-y-2">
            <a
              v-for="item in menuItems"
              :key="item.name"
              :href="item.link"
              class="px-4 py-2 rounded-md text-gray-700
                     hover:bg-greenLight hover:text-greenDark
                     transition duration-200"
            >
              {{ item.name }}
            </a>
    
            <a
              href="#contact"
              class="mt-2 px-4 py-2 rounded-md bg-greenMain text-white text-center
                     font-semibold hover:bg-greenDark transition"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </header>
    </template>
    