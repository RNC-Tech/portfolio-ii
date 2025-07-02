'use client'
import React, { useRef } from 'react'
import Image from 'next/image'

// Define GalleryItem type
export type GalleryItem = {
  type: 'image' | 'video';
  src: string;
}

interface ProjectGalleryProps {
  projectId: number
  projectTitle: string
  gallery: GalleryItem[]
}

const ProjectGallery = ({ projectId, projectTitle, gallery }: ProjectGalleryProps) => {
  const images = gallery.filter(item => item.type === 'image');
  const videos = gallery.filter(item => item.type === 'video');

  const imageDialogRefs = useRef<(HTMLDialogElement | null)[]>([]);
  const videoDialogRefs = useRef<(HTMLDialogElement | null)[]>([]);
  const videoMediaRefs = useRef<(HTMLIFrameElement | HTMLVideoElement | null)[]>([]);

  return (
    <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">Project Gallery</h2>
      {/* DaisyUI Tabs - LIFT STYLE */}
      <div className="tabs tabs-lift mb-6 w-full">
        {/* Images Tab */}
        <label className="tab">
          <input type="radio" name={`gallery_tabs_${projectId}`} defaultChecked />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V7.5A2.25 2.25 0 0 1 5.25 5.25h13.5A2.25 2.25 0 0 1 21 7.5v9a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 16.5Zm0 0 5.25-5.25a2.25 2.25 0 0 1 3.182 0l.318.318m0 0 2.25 2.25m-2.25-2.25 2.25-2.25a2.25 2.25 0 0 1 3.182 0L21 16.5" />
          </svg>
          Images
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.length > 0 ? (
              images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-700 rounded-lg h-48 flex items-center justify-center overflow-hidden group relative cursor-pointer"
                    onClick={() => {
                      imageDialogRefs.current[index]?.showModal();
                    }}
                  >
                    <Image
                      src={item.src}
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
                    <dialog
                      ref={el => { imageDialogRefs.current[index] = el; }}
                      id={`modal_${projectId}_img_${index}`}
                      className="modal"
                    >
                      <div className="modal-box w-5/6 max-w-4xl min-h-[85vh] bg-gray-800">
                        <h3 className="font-bold text-lg text-white mb-4">{projectTitle} - Image {index + 1}</h3>
                        <div className="flex justify-center mb-4">
                          <Image
                            src={item.src}
                            alt={`${projectTitle} - Image ${index + 1}`}
                            width={800}
                            height={600}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg"
                          />
                        </div>
                        <div className="modal-action"></div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                );
              })
            ) : (
              <div className="col-span-3 text-center text-gray-400">No images available.</div>
            )}
          </div>
        </div>
        {/* Videos Tab */}
        <label className="tab">
          <input type="radio" name={`gallery_tabs_${projectId}`} />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
          Videos
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.length > 0 ? (
              videos.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-700 rounded-lg h-48 flex items-center justify-center overflow-hidden group relative cursor-pointer"
                    onClick={() => {
                      videoDialogRefs.current[index]?.showModal();
                    }}
                  >
                    {item.src.includes('youtube.com') || item.src.includes('youtu.be') ? (
                      <iframe
                        ref={el => { videoMediaRefs.current[index] = el; }}
                        src={item.src.replace('watch?v=', 'embed/')}
                        className="object-contain rounded-lg"
                        style={{ width: '100%', maxWidth: 900, aspectRatio: '16/9', height: 'auto' }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`YouTube video ${index + 1}`}
                        width={900}
                        height={506}
                      />
                    ) : (
                      <video
                        ref={el => { videoMediaRefs.current[index] = el; }}
                        src={item.src}
                        className="object-contain rounded-lg"
                        style={{ width: '100%', maxWidth: 900, aspectRatio: '16/9', height: 'auto' }}
                        controls={false}
                        preload="metadata"
                      />
                    )}
                    <div className="absolute inset-0 bg-gray bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                        View Video {index + 1}
                      </span>
                    </div>
                    {/* DaisyUI Modal for this video */}
                    <dialog
                      ref={el => { videoDialogRefs.current[index] = el; }}
                      id={`modal_${projectId}_vid_${index}`}
                      className="modal"
                      onClose={() => {
                        const mediaRef = videoMediaRefs.current[index];
                        if (mediaRef) {
                          const src = mediaRef.src;
                          mediaRef.src = '';
                          setTimeout(() => {
                            if (mediaRef) {
                              mediaRef.src = src;
                            }
                          }, 0);
                        }
                      }}
                    >
                      <div className="modal-box w-full max-w-3xl bg-gray-800">
                        <h3 className="font-bold text-lg text-white mb-4">{projectTitle} - Video {index + 1}</h3>
                        <div className="flex justify-center mb-4">
                          {item.src.includes('youtube.com') || item.src.includes('youtu.be') ? (
                            <iframe
                              ref={el => { videoMediaRefs.current[index] = el; }}
                              src={item.src.replace('watch?v=', 'embed/')}
                              className="object-contain rounded-lg"
                              style={{ width: '100%', maxWidth: 900, aspectRatio: '16/9', height: 'auto' }}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title={`YouTube video ${index + 1}`}
                              width={900}
                              height={506}
                            />
                          ) : (
                            <video
                              ref={el => { videoMediaRefs.current[index] = el; }}
                              src={item.src}
                              controls
                              className="object-contain rounded-lg"
                              style={{ width: '100%', maxWidth: 900, aspectRatio: '16/9', height: 'auto' }}
                            />
                          )}
                        </div>
                        <div className="modal-action"></div>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                );
              })
            ) : (
              <div className="col-span-3 text-center text-gray-400">No videos available.</div>
            )}
          </div>
        </div>
      </div>
      {(gallery && gallery.length > 0) && (
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm">
            {images.length} image{images.length !== 1 ? 's' : ''} &bull; {videos.length} video{videos.length !== 1 ? 's' : ''} in gallery
          </p>
        </div>
      )}
    </div>
  )
}

export default ProjectGallery 