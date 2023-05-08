import React, {useState, useEffect} from 'react';
import './contato.css';

export default function Contato(){

    // const fetch = require('https');
    console.log(fetch)

    const [email, setEmail] = useState(null)
    const [message, setMessage] = useState(null)
    const [mailSent, setMailSent] = useState(false)
    const [feedbackMessage] = useState("Seu contato foi enviado com sucesso!")

    const handleSendForm = (e) => {
        e.preventDefault();
        const contactValue = e.target.form.querySelector(".contactInputContact").value
        const messageValue = e.target.form.querySelector(".contactInputMessage").value
        setEmail(contactValue)
        setMessage(messageValue)
    }

    useEffect(() => {
        let dataValidate = {}
        let data = {}

        if(email !== null && email !== undefined && email !== ""){
            data.email_contact = email
            dataValidate.email = true
        }

        if(message !== null && message !== undefined && message !== ""){
            data.email_msg = message
            dataValidate.message = true
        }

        if(dataValidate.email && dataValidate.message){
            sendEmail(data.email_contact, data.email_msg)
        }

    }, [email, message, mailSent]);

    async function sendEmail(email, message){
        const options = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"email_contact":email, "email_msg":message})
        }

        const response = await fetch('http://15.228.226.51/contato/enviar', options)
        const jsonData = await response.json()
        if(jsonData.success === "ok") {
            setMailSent(true)
        }
    }

    const FeedbackComponent = () => {
        return <p className="feedbackMessage">{feedbackMessage}</p>
    }

    return (
        <section className="contato">
            <div className="container">
                <div className="topBlackDetail"></div>
                <h1 className="sectionTitle">Contato</h1>
                <div className="alertBoard">
                    <p className="boardMessage">
                    Envie-nos uma mensagem caso tenha alguma dúvida. <br/><br/> Pode ser pergunta ou feedback. Por favor, seja conciso, deixe seu contato e retornaremos o mais breve possível. Obrigado por visitar o nosso site.
                    </p>
                </div>
                <div className="contactFormWrapper">
                    <form action='#' method='POST'>
                        {/* <div className="inputOrganizer">
                            <label className="labelForContactInput" for="contactNome">Nome</label>
                            <input type="text" className="contactInput" name="contactNome"/>
                        </div> */}
                        <div className="inputOrganizer">
                            <label className="labelForContactInput" htmlFor="contactEmail">Email</label>
                            <input type="text" className="contactInput contactInputContact" name="contactEmail"/>
                        </div>
                        {/* <div className="inputOrganizer">
                            <label className="labelForContactInput" for="contactTelefone">Telefone</label>
                            <input type="text" className="contactInput" name="contactTelefone"/>
                        </div> */}
                        <div className="inputOrganizer">
                            <label className="labelForContactInput" htmlFor="contactMensagem">Mensagem</label>
                            <textarea type="text" className="contactInput contactInputMessage" name="contactMensagem"/>
                        </div>
                        <input type="submit" className="enviarBtn"value="Enviar" onClick={(e) => {handleSendForm(e)}} />
                    </form>
                    {mailSent ? <FeedbackComponent/> : "" }
                </div>
                <p className="social_label">links para contato</p>
                <div className="social">
                    <a id="linkedin" target="blanc" href="https://www.linkedin.com/in/engsofthyezoliveira/">
                        <svg className="icon" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M48 8C50.1217 8 52.1566 8.84285 53.6569 10.3431C55.1571 11.8434 56 13.8783 56 16V48C56 50.1217 55.1571 52.1566 53.6569 53.6569C52.1566 55.1571 50.1217 56 48 56H16C13.8783 56 11.8434 55.1571 10.3431 53.6569C8.84285 52.1566 8 50.1217 8 48V16C8 13.8783 8.84285 11.8434 10.3431 10.3431C11.8434 8.84285 13.8783 8 16 8H48ZM21.3333 26.6667C20.6261 26.6667 19.9478 26.9476 19.4477 27.4477C18.9476 27.9478 18.6667 28.6261 18.6667 29.3333V42.6667C18.6667 43.3739 18.9476 44.0522 19.4477 44.5523C19.9478 45.0524 20.6261 45.3333 21.3333 45.3333C22.0406 45.3333 22.7189 45.0524 23.219 44.5523C23.719 44.0522 24 43.3739 24 42.6667V29.3333C24 28.6261 23.719 27.9478 23.219 27.4477C22.7189 26.9476 22.0406 26.6667 21.3333 26.6667ZM29.3333 24C28.6261 24 27.9478 24.281 27.4477 24.781C26.9476 25.2811 26.6667 25.9594 26.6667 26.6667V42.6667C26.6667 43.3739 26.9476 44.0522 27.4477 44.5523C27.9478 45.0524 28.6261 45.3333 29.3333 45.3333C30.0406 45.3333 30.7189 45.0524 31.219 44.5523C31.719 44.0522 32 43.3739 32 42.6667V32.9067C33.0404 31.775 34.3056 30.8731 35.7147 30.2587C36.6027 29.88 37.9387 29.7253 38.8667 30.0187C39.1745 30.0968 39.4487 30.2727 39.648 30.52C39.7867 30.7067 40 31.1227 40 32V42.6667C40 43.3739 40.281 44.0522 40.7811 44.5523C41.2811 45.0524 41.9594 45.3333 42.6667 45.3333C43.3739 45.3333 44.0522 45.0524 44.5523 44.5523C45.0524 44.0522 45.3333 43.3739 45.3333 42.6667V32C45.3333 30.2133 44.88 28.624 43.936 27.3493C43.0673 26.1935 41.8516 25.3459 40.4667 24.9307C38.0613 24.176 35.3973 24.5947 33.6187 25.3573C33.0488 25.6012 32.494 25.8791 31.9573 26.1893C31.8455 25.5749 31.5217 25.0192 31.0421 24.6191C30.5626 24.219 29.9579 23.9999 29.3333 24ZM21.3333 18.6667C20.6261 18.6667 19.9478 18.9476 19.4477 19.4477C18.9476 19.9478 18.6667 20.6261 18.6667 21.3333C18.6667 22.0406 18.9476 22.7189 19.4477 23.219C19.9478 23.719 20.6261 24 21.3333 24C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333C24 20.6261 23.719 19.9478 23.219 19.4477C22.7189 18.9476 22.0406 18.6667 21.3333 18.6667Z" />
                        </svg>
                    </a>
                    <a id="zap" target="blanc" href="https://wa.link/1twezw">
                        <svg className="icon" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M58.64 17.4587C58.6178 16.3146 58.526 15.1729 58.3653 14.04C58.1737 13.0323 57.8482 12.0547 57.3973 11.1333C56.4103 9.18481 54.8279 7.60154 52.88 6.61334C51.9645 6.16458 50.9933 5.83994 49.992 5.64801C48.8504 5.48396 47.6997 5.39045 46.5466 5.36801C46.0586 5.34934 45.4266 5.34134 45.1333 5.34134L18.872 5.33334C18.5786 5.33334 17.9466 5.34134 17.4586 5.36001C16.3146 5.38205 15.1729 5.47378 14.04 5.63468C13.0323 5.82625 12.0547 6.15181 11.1333 6.60268C9.18489 7.58988 7.60166 9.17217 6.61331 11.12C6.16466 12.0355 5.84003 13.0067 5.64798 14.008C5.48319 15.1496 5.38879 16.3002 5.36531 17.4533C5.34931 17.9413 5.33865 18.5733 5.33865 18.8667L5.33331 45.128C5.33331 45.4213 5.34131 46.0533 5.35998 46.5413C5.38202 47.6854 5.47375 48.8271 5.63465 49.96C5.82625 50.9677 6.1518 51.9453 6.60265 52.8667C7.58985 54.8151 9.17214 56.3983 11.12 57.3867C12.0355 57.8353 13.0067 58.1599 14.008 58.352C15.1496 58.5161 16.3002 58.6096 17.4533 58.632C17.9413 58.6507 18.5733 58.6587 18.8666 58.6587L45.128 58.664C45.4213 58.664 46.0533 58.656 46.5413 58.6373C47.6854 58.6152 48.827 58.5235 49.96 58.3627C50.9677 58.171 51.9452 57.8454 52.8666 57.3947C54.8161 56.4079 56.4003 54.8256 57.3893 52.8773C57.838 51.9619 58.1627 50.9906 58.3546 49.9893C58.5195 48.8478 58.6139 47.6972 58.6373 46.544C58.6533 46.056 58.664 45.424 58.664 45.1307L58.6666 18.872C58.6666 18.5787 58.6586 17.9467 58.64 17.4587ZM32.5786 50.552H32.5706C29.3964 50.5514 26.2729 49.7556 23.4853 48.2373L13.4053 50.88L16.104 41.032C14.0145 37.4062 13.1796 33.1923 13.7288 29.0437C14.2779 24.8951 16.1804 21.0436 19.1412 18.0862C22.1021 15.1289 25.9559 13.231 30.1051 12.6868C34.2544 12.1426 38.4673 12.9825 42.0906 15.0763C45.714 17.17 48.5453 20.4007 50.1457 24.2674C51.7461 28.1341 52.0261 32.4207 50.9424 36.4627C49.8586 40.5047 47.4716 44.0763 44.1514 46.6236C40.8312 49.171 36.7634 50.5518 32.5786 50.552Z" fill="black"/>
                        <path d="M32.5867 15.736C29.7629 15.7352 26.9905 16.4909 24.5577 17.9245C22.1249 19.3581 20.1206 21.4173 18.7533 23.888C17.386 26.3586 16.7055 29.1505 16.7826 31.9732C16.8598 34.7959 17.6918 37.5464 19.192 39.9387L19.568 40.536L17.9707 46.3653L23.952 44.7973L24.528 45.1387C26.9629 46.5807 29.7408 47.3415 32.5707 47.3413H32.5787C36.7702 47.342 40.7903 45.6777 43.7546 42.7143C46.7189 39.751 48.3846 35.7315 48.3854 31.54C48.3861 27.3485 46.7217 23.3284 43.7584 20.3641C40.795 17.3998 36.7755 15.734 32.584 15.7333L32.5867 15.736ZM41.8774 38.3227C41.5278 38.8999 41.0626 39.3986 40.511 39.7873C39.9593 40.176 39.3332 40.4464 38.672 40.5813C37.6737 40.7526 36.6493 40.6886 35.68 40.3947C34.7608 40.1082 33.8573 39.7735 32.9734 39.392C29.6926 37.7456 26.8963 35.2745 24.8587 32.2213C23.7472 30.8079 23.0724 29.1008 22.9174 27.3093C22.9045 26.5699 23.0459 25.8359 23.3324 25.1541C23.6189 24.4723 24.0442 23.8577 24.5814 23.3493C24.7401 23.1683 24.9346 23.022 25.1525 22.9196C25.3705 22.8173 25.6073 22.7611 25.848 22.7547C26.1627 22.7547 26.48 22.7547 26.7574 22.7707C27.0507 22.784 27.44 22.6587 27.824 23.5867C28.224 24.536 29.1734 26.8747 29.2907 27.112C29.366 27.2364 29.4091 27.3777 29.4161 27.5229C29.4231 27.6682 29.3937 27.8129 29.3307 27.944C29.2111 28.2293 29.0512 28.496 28.856 28.736C28.616 29.0133 28.3574 29.3547 28.144 29.568C27.904 29.8053 27.6587 30.0613 27.9334 30.536C28.6468 31.7575 29.5373 32.8664 30.576 33.8267C31.703 34.8287 32.9962 35.6264 34.3974 36.184C34.872 36.424 35.1494 36.3813 35.4267 36.064C35.704 35.7467 36.6134 34.6773 36.9307 34.2027C37.248 33.728 37.5627 33.808 37.9974 33.9653C38.432 34.1227 40.7707 35.272 41.2454 35.512C41.72 35.752 42.0374 35.8667 42.1547 36.064C42.2847 36.8278 42.1883 37.613 41.8774 38.3227Z" />
                        </svg>
                    </a>
                    <a id="github" target="blanc" href="https://github.com/thyezoliveira">
                        <svg className="icon" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="M55.68 8.26401C53.7253 6.30934 51.3733 5.33334 48.6213 5.33334H15.3227C12.5707 5.33334 10.2187 6.30934 8.26401 8.26401C6.30934 10.2187 5.33334 12.5707 5.33334 15.3227V48.6213C5.33334 51.3733 6.30934 53.7253 8.26401 55.68C10.2187 57.6347 12.5707 58.6107 15.3227 58.6107H23.0933C23.6 58.6107 23.9813 58.592 24.2373 58.5573C24.5352 58.4976 24.804 58.3388 25 58.1067C25.2533 57.84 25.3813 57.4533 25.3813 56.9467L25.3627 54.5867C25.352 53.0827 25.3467 51.8933 25.3467 51.0133L24.5467 51.152C24.04 51.2453 23.4 51.2853 22.624 51.2747C21.8152 51.2598 21.0089 51.1786 20.2133 51.032C19.3664 50.8756 18.5691 50.5191 17.888 49.992C17.1747 49.4524 16.6426 48.7082 16.3627 47.8587L16.016 47.0587C15.7238 46.4276 15.3567 45.834 14.9227 45.2907C14.4267 44.6427 13.9227 44.2053 13.4133 43.9733L13.1733 43.8C13.006 43.6801 12.8538 43.5405 12.72 43.384C12.5923 43.2388 12.4871 43.0752 12.408 42.8987C12.3387 42.736 12.3973 42.6027 12.5813 42.4987C12.768 42.392 13.1013 42.3413 13.5893 42.3413L14.2827 42.448C14.744 42.5387 15.3173 42.816 15.9973 43.2773C16.6855 43.7465 17.2604 44.3633 17.68 45.0827C18.2133 46.0293 18.8533 46.752 19.6053 47.2507C20.3573 47.7467 21.1147 47.9973 21.8773 47.9973C22.64 47.9973 23.2987 47.9387 23.856 47.824C24.395 47.7126 24.9187 47.5371 25.416 47.3013C25.624 45.7547 26.1893 44.56 27.1147 43.728C25.9157 43.6105 24.7274 43.4019 23.56 43.104C22.4208 42.7911 21.3252 42.3369 20.2987 41.752C19.2247 41.1673 18.276 40.3772 17.5067 39.4267C16.768 38.5013 16.16 37.288 15.6853 35.7867C15.2133 34.2827 14.976 32.5467 14.976 30.5813C14.976 27.784 15.888 25.4027 17.7147 23.4347C16.8613 21.3333 16.9413 18.9733 17.9573 16.3627C18.6293 16.152 19.624 16.3093 20.9413 16.8293C22.2587 17.3493 23.224 17.7947 23.8373 18.1627C24.4507 18.536 24.9413 18.848 25.312 19.1013C27.4799 18.498 29.7204 18.1947 31.9707 18.2C34.2613 18.2 36.48 18.5013 38.632 19.1013L39.9493 18.2693C40.9626 17.6609 42.0314 17.1502 43.1413 16.744C44.368 16.28 45.3013 16.1547 45.952 16.3627C46.992 18.976 47.0827 21.3333 46.2267 23.4373C48.0533 25.4027 48.968 27.784 48.968 30.584C48.968 32.5493 48.7307 34.2907 48.256 35.8027C47.784 37.3173 47.1707 38.5307 46.4187 39.4453C45.6358 40.3837 44.6832 41.1662 43.6107 41.752C42.4907 42.376 41.4027 42.8267 40.3493 43.104C39.1821 43.4028 37.9938 43.6123 36.7947 43.7307C37.9947 44.7707 38.5973 46.4107 38.5973 48.6533V56.9467C38.5973 57.3387 38.6533 57.656 38.7707 57.8987C38.8246 58.0156 38.9015 58.1205 38.9968 58.207C39.0921 58.2936 39.2038 58.3601 39.3253 58.4027C39.5813 58.4933 39.8053 58.552 40.0027 58.5733C40.2 58.6 40.4827 58.608 40.8507 58.608H48.6213C51.3733 58.608 53.7253 57.632 55.68 55.6773C57.632 53.7253 58.6107 51.3707 58.6107 48.6187V15.3227C58.6107 12.5707 57.6347 10.2187 55.68 8.26401Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}