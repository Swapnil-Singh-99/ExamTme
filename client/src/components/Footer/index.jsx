import React from 'react'

const Footer = () => {
    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/">
                        <img
                            className="h-auto w-[150px]"
                            src="https://i.postimg.cc/m2qJB5J2/logo-1.png"
                            alt="Exam Time"
                        />
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024
                    <a href="https://flowbite.com/" class="hover:underline"> ExamTime</a>
                    . All Rights Reserved.</span>
            </div>
        </footer>

    )
}

export default Footer