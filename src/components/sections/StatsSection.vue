<script setup>
    import { ref, onMounted } from 'vue'
    
    // Stats data
    const stats = [
      { label: 'Total Projects', value: 125 },
      { label: 'Our Clients', value: 78 },
      { label: 'Reviews', value: 230 },
      { label: 'Awards', value: 15 },
    ]
    
    // Reactive counters
    const counts = stats.map(() => ref(0))
    
    // Count-up animation function
    function animateCount(index, target) {
      let current = 0
      const increment = Math.ceil(target / 100)
      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          counts[index].value = target
          clearInterval(interval)
        } else {
          counts[index].value = current
        }
      }, 20) // updates every 20ms
    }
    
    // Trigger animation on mount
    onMounted(() => {
      stats.forEach((stat, index) => {
        animateCount(index, stat.value)
      })
    })
    </script>
    
    <template>
      <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="bg-white shadow-lg rounded-xl p-8 text-center flex flex-col items-center justify-center"
          >
            <!-- Auto-count Number -->
            <p class="text-4xl font-extrabold text-greenMain">
              {{ counts[index] }}
            </p>
    
            <!-- Label -->
            <p class="mt-2 text-gray-600 font-semibold">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </section>
    </template>
    
    <style scoped>
    /* Optional: add hover or animation effects here */
    </style>
    