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
                <p>info@rtechsolutions.com</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-greenDark">Phone</h3>
                <p>+254 700 123 456</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-greenDark">Address</h3>
                <p> Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
    