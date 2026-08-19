import {Skills} from './Skills';    

const Profile: React.FC = () => {
    return (
        <div id = "profile-component">
            <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFSkvyoCCypOg/profile-displayphoto-crop_800_800/B4DZsBhOvxHwAI-/0/1765257049615?e=1788393600&v=beta&t=mlvQgyY_q6OBd_yjx7NneEGBB7uK6QEabHU6pdJfSM8"
            alt="Fernanda Souza"
            />
            <h3>Fernanda Souza</h3>
            <p><b>Cargo Atual: Pesquisadora IA | Ciência de Dados</b></p>
            <Skills/>
        </div>
    )
}

export default Profile