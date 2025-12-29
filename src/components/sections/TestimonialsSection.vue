<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    
    // Testimonials data
    const testimonials = [
      {
        name: 'Abiud Misiko',
        title: 'Accountant, KMTC',
        text: 'Rtech Solutions helped streamline our lecture payments and scheduling. Highly professional and reliable!',
      },
      {
        name: 'Mr. Keith',
        title: 'CEO, Krawly Script Agency',
        text: 'They built our corporate website with great attention to detail. Excellent communication and results.',
      },
      {
        name: 'Heri School',
        title: 'Institution',
        text: 'The Smart School ERP system transformed how we manage school operations efficiently.',
      },
    ]
    
    const currentTestimonial = ref(0)
    let interval = null
    
    // Auto-slide every 5 seconds
    onMounted(() => {
      interval = setInterval(() => {
        currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
      }, 5000)
    })
    
    onUnmounted(() => {
      clearInterval(interval)
    })
    </script>
    
    <template>
        <section id="testimonials" class="py-20 bg-gray-50 relative">
          <div class="max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-extrabold text-greenDark">
              What Our Clients Say
            </h2>
            <p class="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from some of the clients we have successfully delivered projects for.
            </p>
          </div>
      
          <!-- Container to give height for absolute slides -->
          <div class="relative max-w-3xl mx-auto h-64 md:h-80">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="absolute inset-0 transition-opacity duration-1000 flex items-center justify-center"
              :class="{
                'opacity-100 z-20': index === currentTestimonial,
                'opacity-0 z-10': index !== currentTestimonial
              }"
            >
              <div class="bg-white shadow-lg rounded-xl p-10 text-center w-full">
                <p class="text-gray-700 text-lg mb-6 italic">"{{ testimonial.text }}"</p>
                <h3 class="text-xl font-bold text-greenDark">{{ testimonial.name }}</h3>
                <p class="text-gray-500">{{ testimonial.title }}</p>
              </div>
            </div>
      
            <!-- Slide Indicators -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
              <button
                v-for="(_, index) in testimonials"
                :key="index"
                @click="currentTestimonial = index"
                class="w-3 h-3 rounded-full transition"
                :class="index === currentTestimonial ? 'bg-greenMain' : 'bg-gray-400/50'"
              />
            </div>
          </div>
        </section>
      </template>
      