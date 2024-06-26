"use client"
import React from 'react'
import { socialLinks } from '@/Database/Links'
const Socials = () => {

    const list= [
        {
            link:socialLinks.linkedin,
            iconName:"fa-brands fa-linkedin-in",
        },
        {
            link:socialLinks.github,
            iconName:"fa-brands fa-github",
        },
        {
            link:socialLinks.gmail,
            iconName:"fa-brands fa-google",
        },
        {
            link:socialLinks.resume,
            iconName:"fa-regular fa-file",
            isDownload: true,
        }
    ]

    const handleClick = (link) => {
        if (link.isDownload) {
            // For download link, simulate click event on hidden anchor element
            const anchor = document.createElement('a');
            anchor.href = link.link;
            anchor.download = 'saad-resume.pdf'; // Change the filename as needed
            anchor.click();
        }
    };

    return (
        <div className=' icon-outer-container '>
          {
          list.map((elem,index)=>{
            return(
            <div className='icon-container' key={index}>
                <a href={elem.link} target='blank' rel='noopener noreferrer' onClick={() => handleClick(elem)}>
                    <div className='border-solid-gray'>
                    <i className={`${elem.iconName} fa-beat-fade icons`}></i>
                    </div>
                </a>
            </div>
            )
          })
            
          }
   
        </div>
    )
}

export default Socials
