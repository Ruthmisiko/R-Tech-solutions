<script setup>
    import { ref } from 'vue'
    
    // Form reactive data
    const form = ref({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    
    // Simple submit handler (replace with API call)
    function submitForm() {
      console.log('Form submitted:', form.value)
      alert('Thank you! Your message has been sent.')
      form.value = { name: '', email: '', subject: '', message: '' } // reset form
    }
    </script>
    
    <template>
      <section id="contact" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-6">
          <!-- Header -->
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-extrabold text-greenDark">Contact Us</h2>
            <p class="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Get in touch with us for project inquiries, partnerships, or any questions.
            </p>
          </div>
    
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-white shadow-lg rounded-xl p-8">
              <form @submit.prevent="submitForm" class="flex flex-col gap-6">
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Your Name"
                  class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-greenMain"
                  required
                />
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Your Email"
                  class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-greenMain"
                  required
                />
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="Subject"
                  class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-greenMain"
                  required
                />
                <textarea
                  v-model="form.message"
                  rows="5"
                  placeholder="Your Message"
                  class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-greenMain"
                  required
                ></textarea>
                <button
                  type="submit"
                  class="px-6 py-3 bg-greenMain text-white font-bold rounded-lg hover:bg-greenDark transition"
                >
                  Send Message
                </button>
              </form>
            </div>
    
            <!-- Contact Info -->
            <div class="flex flex-col justify-center gap-6 text-gray-700">
              <div>
                <h3 class="text-lg font-semibold text-greenDark">Email</h3>
                <p>rtechsolutions254@gmail.com</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-greenDark">Phone</h3>
                <p>+254 713 631 923</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-greenDark">Address</h3>
                <p> Nairobi, Kenya</p>
              </div>
              <!-- WhatsApp -->
                        <!-- WhatsApp -->
          <div class="flex items-center gap-3 mt-4">
            <!-- WhatsApp Icon using inline SVG -->
            <a
              href="https://wa.me/254713631923"
              target="_blank"
              class="flex items-center gap-2 text-green-600 font-semibold hover:text-green-900 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.373 0 12c0 2.121.556 4.097 1.523 5.824L0 24l6.294-1.523A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.472 17.472c-.237.66-1.376 1.265-1.91 1.34-.508.07-1.12.097-5.031-1.14-4.08-1.265-6.032-5.515-6.236-5.79-.204-.274-1.663-2.254-1.663-4.28 0-2.027 1.063-3.02 1.44-3.437.374-.417.814-.51 1.088-.51.273 0 .544.002.78.003.238.002.558-.096.874.658.317.754 1.076 2.616 1.173 2.806.096.19.16.412.002.662-.158.25-.238.404-.474.63-.236.226-.5.505-.714.677-.236.192-.48.402-.33.79.15.386.668 1.27 1.432 2.05.99.968 1.84 1.265 2.217 1.406.374.14.594.117.81-.07.216-.186.876-1.036 1.114-1.4.237-.365.474-.303.808-.182.334.12 2.106.99 2.465 1.167.36.177.6.264.684.412.084.147.084.853-.153 1.512z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

            </div>
          </div>
        </div>
      </section>
    </template>
    