import React from 'react'

export default function RightMediaLeftContent() {
    return (
        <div class="relative bg-white">
            <div class="lg:absolute lg:inset-0">
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img class="h-56 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="" />
                </div>
            </div>
            <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                <div class="lg:pr-8">
                    <div class="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                        <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
                            Let's work together
                        </h2>
                        <br />
                        <br />
                        <p class="mt-4 text-lg leading-7 text-gray-500 sm:mt-3">
                            Wed love to hear from you! Send us a message using the form opposite, or email us. Wed love to hear from you! Send us a message using the form opposite, or email us.
                        </p>
                        <br />
                        <p class="mt-4 text-lg leading-7 text-gray-500 sm:mt-3">
                            Wed love to hear from you! Send us a message using the form opposite, or email us. Wed love to hear from you! Send us a message using the form opposite, or email us.
                        </p>
                        <br />
                        <p class="mt-4 text-lg leading-7 text-gray-500 sm:mt-3">
                            Wed love to hear from you! Send us a message using the form opposite, or email us. Wed love to hear from you! Send us a message using the form opposite, or email us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
