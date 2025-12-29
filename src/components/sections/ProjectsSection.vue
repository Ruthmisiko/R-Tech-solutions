<script setup>
    // Import project images
    import schoolImg from '@/assets/images/school.png'
    import lectureImg from '@/assets/images/lecture.png'
    import krawlyImg from '@/assets/images/krawly.png'
    import damageTrackerImg from '@/assets/images/damagetracker.png'
    
    // Projects data
    const projects = [
      {
        image: schoolImg,
        title: 'Smart School ERP System',
        description: 'A comprehensive ERP solution for managing school operations efficiently.',
      },
      {
  image: lectureImg,
  title: 'Lecture Management System',
  description: 'A specialized platform for institutions like KMTC to monitor lectures, manage schedules, and efficiently process payments for lecturers.',
},
      {
        image: krawlyImg,
        title: 'Krawly Script Agency Website',
        description: 'Professional corporate website for Krawly Script Agency.',
      },
      {
        image: damageTrackerImg,
        title: 'Kitui County Damage Tracker System',
        description: 'A system for tracking damages and reporting incidents in Kitui County.',
      },
    ]
    </script>
    
    <template>
      <section id="projects" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold text-greenDark">
            Our Projects
          </h2>
          <p class="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of the projects we have successfully delivered for our clients.
          </p>
        </div>
    
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="bg-white shadow-lg rounded-xl overflow-hidden transition hover:scale-105 duration-300"
          >
            <!-- Project Image -->
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
    
            <!-- Content -->
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold text-greenDark mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 text-base leading-relaxed">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </template>
    