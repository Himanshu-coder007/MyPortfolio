import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="py-6 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Himanshu Nagose. All rights reserved.
            </div>
          </footer>
    </div>
  )
}

export default Footer