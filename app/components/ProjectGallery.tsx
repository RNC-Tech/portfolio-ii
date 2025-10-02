'use client'
import React, { useRef, useState } from 'react'
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

  const [activeGalleryTab, setActiveGalleryTab] = useState<'images' | 'videos'>('images');

  const handleGalleryTabClick = (tab: 'images' | 'videos') => {
    setActiveGalleryTab(tab);
  };

  return (
    <div className="rounded-2xl">
      {/* DaisyUI Tabs - BORDER STYLE */}
      <div role="tablist" className="tabs tabs-lift mb-6 w-full rounded-2xl">
        {/* Images Tab */}
        <a 
          role="tab" 
          className={`tab glass-tab ${activeGalleryTab === 'images' ? 'tab-active' : ''}`}
          onClick={() => handleGalleryTabClick('images')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V7.5A2.25 2.25 0 0 1 5.25 5.25h13.5A2.25 2.25 0 0 1 21 7.5v9a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 16.5Zm0 0 5.25-5.25a2.25 2.25 0 0 1 3.182 0l.318.318m0 0 2.25 2.25m-2.25-2.25 2.25-2.25a2.25 2.25 0 0 1 3.182 0L21 16.5" />
          </svg>
          Images
        </a>
        <div className={`tab-content glass-card no-hover p-6 ${activeGalleryTab === 'images' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {images.length > 0 ? (
              images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="glass-card rounded-lg h-48 flex items-center justify-center overflow-hidden group relative cursor-pointer glass-hover"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2 drop-shadow-lg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.639 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.639 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium drop-shadow-lg">View Image</span>
                    </div>
                    {/* DaisyUI Modal for this image */}
                    <dialog
                      ref={el => { imageDialogRefs.current[index] = el; }}
                      id={`modal_${projectId}_img_${index}`}
                      className="modal"
                    >
                      <div className="modal-box w-11/12 max-w-3xl p-6 glass-modal transition-all duration-300 md:p-8 lg:p-10 max-h-[90vh]">
                        <div className="flex flex-col h-full">
                          <div className="flex justify-end mb-4">
                            <form method="dialog">
                              <div className="tooltip tooltip-bottom" data-tip="Close">
                                <button 
                                  className="btn btn-sm btn-circle btn-ghost text-white z-50 sticky top-4 right-4"
                                  type="submit"
                                >
                                  ✕
                                </button>
                              </div>
                            </form>
                          </div>
                          <div className="flex-1 flex flex-col items-center justify-center">
                            <Image
                              src={item.src}
                              alt={`${projectTitle} - Image ${index + 1}`}
                              width={1200}
                              height={800}
                              className="max-w-full max-h-[80vh] object-contain rounded-lg mb-4"
                            />
                            <h3 className="font-bold text-lg text-white glass-text text-center">{projectTitle} - Image {index + 1}</h3>
                          </div>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop glass-overlay transition-all duration-300">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                );
              })
            ) : (
              <div className="col-span-3 text-center text-gray-400 glass-text-secondary">No images available.</div>
            )}
          </div>
        </div>
        {/* Videos Tab */}
        <a 
          role="tab" 
          className={`tab glass-tab ${activeGalleryTab === 'videos' ? 'tab-active' : ''}`}
          onClick={() => handleGalleryTabClick('videos')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 me-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
          </svg>
          Videos
        </a>
        <div className={`tab-content glass-card no-hover p-6 ${activeGalleryTab === 'videos' ? 'block' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {videos.length > 0 ? (
              videos.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="glass-card rounded-lg h-48 flex items-center justify-center overflow-hidden group relative cursor-pointer glass-hover"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2 drop-shadow-lg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.639 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.639 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium drop-shadow-lg">View Video</span>
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
                      <div className="modal-box w-11/12 max-w-5xl p-6 glass-modal transition-all duration-300 md:p-8 lg:p-10 max-h-[90vh]">
                        <div className="flex flex-col h-full">
                          <div className="flex justify-end mb-4">
                            <form method="dialog">
                              <div className="tooltip tooltip-bottom" data-tip="Close">
                                <button 
                                  className="btn btn-sm btn-circle btn-ghost text-white z-50 sticky top-4 right-4"
                                  type="submit"
                                >
                                  ✕
                                </button>
                              </div>
                            </form>
                          </div>
                          <div className="flex-1 flex flex-col items-center justify-center px-4">
                            {item.src.includes('youtube.com') || item.src.includes('youtu.be') ? (
                              <div className="w-full max-w-5xl aspect-video mb-4">
                                <iframe
                                  ref={el => { videoMediaRefs.current[index] = el; }}
                                  src={item.src.replace('watch?v=', 'embed/')}
                                  className="w-full h-full rounded-lg"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  title={`YouTube video ${index + 1}`}
                                />
                              </div>
                            ) : (
                              <div className="w-full max-w-5xl aspect-video mb-4">
                                <video
                                  ref={el => { videoMediaRefs.current[index] = el; }}
                                  src={item.src}
                                  controls
                                  className="w-full h-full object-contain rounded-lg"
                                />
                              </div>
                            )}
                            <h3 className="font-bold text-lg text-white glass-text text-center">{projectTitle} - Video {index + 1}</h3>
                          </div>
                        </div>
                      </div>
                      <form method="dialog" className="modal-backdrop glass-overlay transition-all duration-300">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                );
              })
            ) : (
              <div className="col-span-3 text-center text-gray-400 glass-text-secondary">No videos available.</div>
            )}
          </div>
        </div>
      </div>
      {(gallery && gallery.length > 0) && (
        <div className="mt-4 text-center">
          <p className="text-gray-400 text-sm glass-text-secondary">
            {images.length} image{images.length !== 1 ? 's' : ''} &bull; {videos.length} video{videos.length !== 1 ? 's' : ''} in gallery
          </p>
        </div>
      )}
    </div>
  )
}

export default ProjectGallery 