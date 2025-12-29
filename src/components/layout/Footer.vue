<script setup>
    const year = new Date().getFullYear()
    </script>
    
    <template>
      <footer class="bg-greenDark text-gray-200">
        <div class="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
    
          <!-- Company Info -->
          <div>
            <h3 class="text-xl font-bold text-white mb-4">
              R-Tech Solutions Limited
            </h3>
            <p class="text-sm leading-relaxed text-gray-300">
              We deliver innovative technology solutions that empower businesses
              to grow, scale, and succeed in a digital-first world.
            </p>
          </div>
    
          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-greenMain">Home</a></li>
              <li><a href="#about" class="hover:text-greenMain">About Us</a></li>
              <li><a href="#services" class="hover:text-greenMain">Services</a></li>
              <li><a href="#projects" class="hover:text-greenMain">Projects</a></li>
            </ul>
          </div>
    
          <!-- Services -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul class="space-y-2 text-sm">
              <li>Software Development</li>
              <li>Web & Mobile Applications</li>
              <li>IT Consulting</li>
              <li>Cooperate Website</li>
            </ul>
          </div>
    
          <!-- Contact -->
          <div>
            <h4 class="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul class="space-y-2 text-sm">
              <li>Email: info@rtechsolutions.com</li>
              <li>Phone: +254 713 631 923</li>
              <li>Location: Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
    
        <!-- Bottom Bar -->
        <div class="border-t border-greenMain/30">
          <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row
                      justify-between items-center text-sm text-gray-400">
            <span>© {{ year }} R-Tech Solutions Limited. All rights reserved.</span>
            <span class="mt-2 md:mt-0">
              Designed & Built by Rtech Solutions
            </span>
          </div>
        </div>
      </footer>
    </template>
    