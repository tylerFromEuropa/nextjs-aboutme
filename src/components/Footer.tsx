import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Footer() {
    return (
        <footer className="my-4">
            <ul className="flex flex-row space-x-2">
                <li>
                    <a href="https://github.com/tylerfromeuropa" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                    </a>
                </li>
                <li>
                    <FontAwesomeIcon icon={faDiscord} size="2xl" title="@tylerfromeuropa" />
                </li>
                <li></li>
            </ul>
        </footer>
    );
}
