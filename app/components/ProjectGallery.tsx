'use client'
import React from 'react'
import Image from 'next/image'

interface ProjectGalleryProps {
  projectId: number
  projectTitle: string
  gallery: string[]
}

const ProjectGallery = ({ projectId, projectTitle, gallery }: ProjectGalleryProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">Project Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gallery && gallery.length > 0 ? (
          gallery.map((image, index) => (
            <div 
              key={index} 
              className="bg-gray-700 rounded-lg h-48 flex items-center justify-center overflow-hidden group relative cursor-pointer"
              onClick={() => {
                const modal = document.getElementById(`modal_${projectId}_${index}`) as HTMLDialogElement;
                if (modal) modal.showModal();
              }}
            >
              <Image 
                src={image} 
                alt={`${projectTitle} - Image ${index + 1}`}
                width={300}
                height={192}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gray bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  View Image {index + 1}
                </span>
              </div>
              
              {/* DaisyUI Modal for this image */}
              <dialog id={`modal_${projectId}_${index}`} className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-gray-800">
                  <h3 className="font-bold text-lg text-white mb-4">{projectTitle} - Image {index + 1}</h3>
                  <div className="flex justify-center mb-4">
                    <Image 
                      src={image} 
                      alt={`${projectTitle} - Image ${index + 1}`}
                      width={800}
                      height={600}
                      className="max-w-full max-h-100 object-contain rounded-lg"
                    />
                  </div>
                  <div className="modal-action">
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          ))
        ) : (
          <>
            <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
              <span className="text-gray-400">Main View</span>
            </div>
            <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
              <span className="text-gray-400">Detail View</span>
            </div>
            <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
              <span className="text-gray-400">Process Work</span>
            </div>
            <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
              <span className="text-gray-400">Final Result</span>
            </div>
            <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
              <span className="text-gray-400">Additional View</span>
            </div>
            <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
              <span className="text-gray-400">Close-up</span>
            </div>
          </>
        )}
      </div>
      {gallery && gallery.length > 0 && (
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            {gallery.length} image{gallery.length !== 1 ? 's' : ''} in gallery
          </p>
        </div>
      )}
    </div>
  )
}

export default ProjectGallery 