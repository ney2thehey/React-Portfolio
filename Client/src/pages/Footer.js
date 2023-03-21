import React from 'react';
import '../styles/FaqStyles.css';
import '../styles/style.css';



function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/SeanAllen19"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/seanallen19/"
    }
  ]

  return (


    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"> Made by Saineha <i className={icon.name}></i></a>
      )
        )}
    </footer>




  )
};

export default Footer