<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    
    // Import hero images
    import hero1 from '@/assets/images/hero1.jpg'
    import hero2 from '@/assets/images/hero2.jpg'
    import hero3 from '@/assets/images/hero3.jpg'
    import hero4 from '@/assets/images/hero4.jpg'
    
    const slides = [
      {
        image: hero1,
        title: 'Innovative Digital Solutions',
        subtitle: 'Empowering businesses through modern technology',
      },
      {
        image: hero2,
        title: 'Reliable Software Development',
        subtitle: 'Scalable, secure, and future-ready systems',
      },
      {
        image: hero3,
        title: 'Transforming Ideas Into Reality',
        subtitle: 'We design and build solutions that drive growth',
      },
      {
        image: hero4,
        title: 'Your Trusted Technology Partner',
        subtitle: 'Delivering excellence across industries and Business Automation',
      },
    ]
    
    const currentSlide = ref(0)
    let interval = null
    
    onMounted(() => {
      interval = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % slides.length
      }, 5000)
    })
    
    onUnmounted(() => {
      clearInterval(interval)
    })

    // Smooth scroll function
function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
    </script>
    
    <template>
      <section class="relative h-screen overflow-hidden">
        
        <!-- Slides -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="absolute inset-0 transition-opacity duration-1000"
          :class="{
            'opacity-100 z-20': index === currentSlide,
            'opacity-0 z-10': index !== currentSlide
          }"
        >
          <!-- Background Image -->
          <img
            :src="slide.image"
            alt="Rtech Solutions"
            class="w-full h-full object-cover"
          />
    
          <!-- Dark Green Overlay -->
          <div class="absolute inset-0 bg-greenDark/50 z-20"></div>
    
          <!-- Centered Content -->
          <div class="absolute inset-0 z-30 flex flex-col justify-center items-center text-center px-6">
            <!-- Title -->
            <h1 class="text-white font-extrabold text-4xl md:text-6xl leading-tight max-w-3xl">
              {{ slide.title }}
            </h1>
    
            <!-- Subtitle -->
            <p class="mt-6 text-white font-bold text-lg md:text-xl max-w-2xl">
              {{ slide.subtitle }}
            </p>
    
           <!-- Buttons -->
        <div class="mt-10 flex gap-4 justify-center">
          <button
            @click="scrollToSection('services')"
            class="px-8 py-3 rounded-md bg-greenMain text-white font-bold hover:bg-greenLight hover:text-greenDark transition"
          >
            Our Services
          </button>

          <button
            @click="scrollToSection('contact')"
            class="px-8 py-3 rounded-md border border-white text-white font-bold hover:bg-white hover:text-greenDark transition"
          >
            Contact Us
          </button>
        </div>
          </div>
        </div>
    
        <!-- Slide Indicators -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-3">
          <button
            v-for="(_, index) in slides"
            :key="index"
            @click="currentSlide = index"
            class="w-3 h-3 rounded-full transition"
            :class="index === currentSlide ? 'bg-greenMain' : 'bg-white/50'"
          />
        </div>
      </section>
    </template>
    