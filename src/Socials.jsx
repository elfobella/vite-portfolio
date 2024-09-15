import InstagramLogo from "./assets/instagram-logo.webp";
import LinkedinLogo from "./assets/linkedin-logo.webp";
import GithubLogo from "./assets/github.png";

export default function Socials() {
    return(
        <div className="flex items-center gap-3 mt-4 justify-center">
            <a href="https://www.instagram.com/yunus.emreu/" target="_blank" className="cursor-pointer"> 
                <img className="w-8" src={InstagramLogo} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/yunus-emre-611538210/" target="_blank" className="cursor-pointer"> 
                <img className="w-8" src={LinkedinLogo} alt="Linkedin" />
            </a>
            <a href="https://github.com/elfobella" target="_blank" className="cursor-pointer"> 
                <img className="w-8" src={GithubLogo} alt="Github" />
            </a>
        </div>
    )

}