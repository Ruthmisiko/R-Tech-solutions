<script setup>
    // Define your services
    const services = [
      {
        icon: '🌐', // Website icon
        title: 'Website Development',
        description: 'Professional, responsive websites tailored to your business needs.',
      },
      {
        icon: '🖥️', // ERP icon
        title: 'ERP Systems',
        description: 'Custom ERP solutions to streamline your business operations efficiently.',
      },
      {
        icon: '📱', // Mobile app icon
        title: 'Mobile App Development',
        description: 'Intuitive mobile applications for iOS and Android platforms.',
      },
    ]
    </script>
    
    <template>
      <section id="services" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold text-greenDark">
            Our Services
          </h2>
          <p class="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            We provide professional services to help your business succeed in the digital world.
          </p>
        </div>
    
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center transition hover:scale-105 duration-300"
          >
            <!-- Icon -->
            <div class="text-5xl mb-4 text-greenMain">
              {{ service.icon }}
            </div>
    
            <!-- Title -->
            <h3 class="text-xl font-bold text-greenDark mb-2">
              {{ service.title }}
            </h3>
    
            <!-- Description -->
            <p class="text-gray-600 text-base leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>
      </section>
    </template>
    