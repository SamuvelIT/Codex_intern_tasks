import React from 'react'

function Team() {
  return (
    <div>
        <div class="p-4">
          <div class="max-w-4xl mx-auto">
              <div class="text-center">
                  <h2 class="text-slate-900 text-3xl font-bold">Meet our team</h2>
              </div>

              <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-sm:justify-center mt-12 max-md:max-w-xl max-sm:max-w-xs mx-auto">
                  <div class="bg-gray-800 p-3 border rounded-lg">
                      <div class="bg-gray-50 aspect-square rounded-lg overflow-hidden">
                          <img src="https://readymadeui.com/team-1.webp" class="w-full h-full object-cover object-top" />
                      </div>

                      <div class="text-center mt-4 mb-1">
                          <h4 class="text-[15px] font-medium text-white">Software Engineer</h4>
                          <p class="text-[13px] mt-1.5 text-slate-300 font-medium">John Doe</p>
                      </div>
                  </div>

                  <div class="bg-gray-800 p-3 border rounded-lg">
                      <div class="bg-gray-50 aspect-square rounded-lg overflow-hidden">
                          <img src="https://readymadeui.com/team-2.webp" class="w-full h-full object-cover object-top" />
                      </div>

                      <div class="text-center mt-4 mb-1">
                          <h4 class="text-[15px] font-medium text-white">Web Developer</h4>
                          <p class="text-[13px] mt-1.5 text-slate-300 font-medium">Mark Adair</p>
                      </div>
                  </div>

                  <div class="bg-gray-800 p-3 border rounded-lg">
                      <div class="bg-gray-50 aspect-square rounded-lg overflow-hidden">
                          <img src="https://readymadeui.com/team-3.webp" class="w-full h-full object-cover object-top" />
                      </div>

                      <div class="text-center mt-4 mb-1">
                          <h4 class="text-[15px] font-medium text-white">Web Designer</h4>
                          <p class="text-[13px] mt-1.5 text-slate-300 font-medium">Simon Konecki</p>
                      </div>
                  </div>

                  <div class="bg-gray-800 p-3 border rounded-lg">
                      <div class="bg-gray-50 aspect-square rounded-lg overflow-hidden">
                          <img src="https://readymadeui.com/team-4.webp" class="w-full h-full object-cover object-top" />
                      </div>

                      <div class="text-center mt-4 mb-1">
                          <h4 class="text-[15px] font-medium text-white">Web Designer</h4>
                          <p class="text-[13px] mt-1.5 text-slate-300 font-medium">Eleanor</p>
                      </div>
                  </div>

                  <div class="bg-gray-800 p-3 border rounded-lg">
                      <div class="bg-gray-50 aspect-square rounded-lg overflow-hidden">
                          <img src="https://readymadeui.com/team-5.webp" class="w-full h-full object-cover object-top" />
                      </div>

                      <div class="text-center mt-4 mb-1">
                          <h4 class="text-[15px] font-medium text-white">Software Engineer</h4>
                          <p class="text-[13px] mt-1.5 text-slate-300 font-medium">Alen</p>
                      </div>
                  </div>

                  <div class="bg-gray-800 p-3 border rounded-lg">
                      <div class="bg-gray-50 aspect-square rounded-lg overflow-hidden">
                          <img src="https://readymadeui.com/team-6.webp" class="w-full h-full object-cover object-top" />
                      </div>

                      <div class="text-center mt-4 mb-1">
                          <h4 class="text-[15px] font-medium text-white">Software Developer</h4>
                          <p class="text-[13px] mt-1.5 text-slate-300 font-medium">Sophia</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Team