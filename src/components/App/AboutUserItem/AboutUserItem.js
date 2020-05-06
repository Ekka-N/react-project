import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import styles from './AboutUserItem.module.css';

const AboutUserItem = ( { aboutMe } ) => {

    const email = 'nikishina.ekater1na@yandex.ru'; //nikishina.ekater1na@yandex.ru
    const number = '+7(988)035-71-19';

    return (
    <Card elevation={3}>
        <CardContent>
            <div className={styles.desc}>
                <img src={aboutMe.avatar_url} className={styles.avatar} alt='avatar'/>
                <div className={styles.desc_content}>
                    <h1 className={styles.title}>{ aboutMe.name || aboutMe.login }</h1>

                    <div className={styles.myContacts}>
                        {/* email */}
                        <a href='mailto:nikishina.ekater1na@yandex.ru' className={styles.link}>
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 512 512">
                                <path d="M405.333,213.874V106.667c0-23.531-19.135-42.667-42.667-42.667h-320C19.135,64,0,83.135,0,106.667V320
                                    c0,23.531,19.135,42.667,42.667,42.667h239.215C295.858,411.84,341.073,448,394.667,448c20.625,0,40.906-5.427,58.677-15.708
                                    c5.094-2.948,6.844-9.469,3.885-14.573c-2.948-5.104-9.479-6.865-14.573-3.885c-14.521,8.396-31.115,12.833-47.99,12.833
                                    c-52.938,0-96-43.063-96-96s43.063-96,96-96s96,43.063,96,96v10.667c0,11.76-9.573,21.333-21.333,21.333
                                    c-11.76,0-21.333-9.573-21.333-21.333v-42.667c0-5.896-4.771-10.667-10.667-10.667c-2.869,0-5.447,1.161-7.362,3
                                    c-9.428-8.401-21.714-13.667-35.305-13.667c-29.406,0-53.333,23.927-53.333,53.333S365.26,384,394.667,384
                                    c15.896,0,30.03-7.131,39.81-18.202c7.727,10.977,20.44,18.202,34.857,18.202C492.865,384,512,364.865,512,341.333v-10.667
                                    C512,269.569,465.044,219.288,405.333,213.874z M42.667,85.333h320c0.444,0,0.816,0.227,1.254,0.254L211.438,210.75
                                    c-5.427,3.417-13.292,2.708-16.823,0.542L41.426,85.585C41.859,85.559,42.227,85.333,42.667,85.333z M384,213.874
                                    c-59.711,5.414-106.667,55.695-106.667,116.793c0,3.6,0.221,7.148,0.54,10.667H42.667c-11.76,0-21.333-9.573-21.333-21.333
                                    V106.667c0-3.021,0.667-5.874,1.805-8.48l158.883,130.293c6.208,4.052,13.344,6.188,20.646,6.188
                                    c7.021,0,13.885-1.979,19.927-5.729c0.604-0.323,1.177-0.708,1.719-1.156l157.88-129.598c1.139,2.608,1.807,5.461,1.807,8.483
                                    V213.874z M394.667,362.667c-17.646,0-32-14.354-32-32c0-17.646,14.354-32,32-32s32,14.354,32,32
                                    C426.667,348.313,412.313,362.667,394.667,362.667z" fill="#777"/>
                            </svg>
                            <span className={styles.contact}>{email} </span>
                        </a>
                        
                        {/* telegramm */}
                        <a href='https://teleg.run/katiandr' className={styles.link}>
                            <svg className={styles.icon} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.282729 6.71437L3.96945 8.09037L5.39644 12.6795C5.48774 12.9735 5.84716 13.0821 6.08572 12.8871L8.14075 11.2118C8.35617 11.0362 8.66299 11.0275 8.88811 11.1909L12.5947 13.8819C12.8499 14.0674 13.2114 13.9276 13.2754 13.6192L15.9907 0.558373C16.0605 0.221519 15.7296 -0.059494 15.4088 0.0645593L0.278409 5.90141C-0.0949774 6.04541 -0.0917241 6.57405 0.282729 6.71437ZM5.16646 7.35789L12.3717 2.92019C12.5012 2.84067 12.6344 3.01576 12.5232 3.11891L6.57681 8.64637C6.3678 8.84093 6.23297 9.10131 6.19478 9.38392L5.99222 10.885C5.9654 11.0855 5.68385 11.1054 5.62854 10.9114L4.8495 8.17405C4.76028 7.86184 4.8903 7.52834 5.16646 7.35789Z" fill="#999999"/>
                            </svg> 
                            <span className={styles.contact}>{number}</span> 
                        </a>
                    </div>

                    <p className={styles.text}>Описание: {aboutMe.bio || 'отсутсвует'}</p>
                    
                    <div className={styles.social}>
                        {/* GitHub */}
                        <a target='_blanc' href={aboutMe.html_url} > 
                            <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.3901 6.27021C21.3171 4.43164 19.8615 2.97604 18.0231 1.90308C16.1844 0.83007 14.1771 0.293701 11.9998 0.293701C9.82276 0.293701 7.81481 0.830234 5.97651 1.90308C4.13794 2.97598 2.68245 4.43164 1.60938 6.27021C0.536478 8.10873 0 10.1164 0 12.2932C0 14.908 0.762879 17.2593 2.28902 19.3477C3.815 21.4362 5.78634 22.8814 8.20287 23.6835C8.48416 23.7357 8.69239 23.6989 8.82778 23.5742C8.96323 23.4493 9.03087 23.2929 9.03087 23.1057C9.03087 23.0744 9.02819 22.7933 9.02299 22.2619C9.01763 21.7306 9.01511 21.2671 9.01511 20.8716L8.65573 20.9337C8.42659 20.9757 8.13753 20.9935 7.78854 20.9885C7.43972 20.9836 7.07759 20.947 6.70267 20.8791C6.32758 20.8117 5.9787 20.6555 5.65576 20.4107C5.33299 20.1659 5.10385 19.8455 4.9684 19.4499L4.81216 19.0904C4.70802 18.851 4.54406 18.5851 4.32006 18.2936C4.09607 18.0019 3.86956 17.8041 3.64042 17.6999L3.53103 17.6216C3.45813 17.5696 3.39049 17.5068 3.32794 17.434C3.26544 17.3611 3.21865 17.2882 3.1874 17.2152C3.1561 17.1422 3.18204 17.0822 3.2655 17.0352C3.34895 16.9882 3.49978 16.9654 3.71863 16.9654L4.031 17.0121C4.23934 17.0538 4.49705 17.1786 4.80444 17.387C5.11168 17.5953 5.36424 17.8661 5.56218 18.1993C5.80188 18.6264 6.09067 18.952 6.42937 19.176C6.76779 19.3999 7.10901 19.5117 7.45269 19.5117C7.79637 19.5117 8.0932 19.4857 8.3433 19.4339C8.59312 19.3818 8.82751 19.3035 9.04636 19.1994C9.14011 18.5012 9.39535 17.9648 9.81187 17.5899C9.2182 17.5275 8.68446 17.4335 8.21037 17.3086C7.73655 17.1835 7.24692 16.9805 6.7418 16.6989C6.2364 16.4178 5.81715 16.0687 5.48392 15.6523C5.15064 15.2356 4.87712 14.6885 4.66374 14.0116C4.45026 13.3344 4.34349 12.5533 4.34349 11.6679C4.34349 10.4073 4.75503 9.33459 5.57794 8.44912C5.19245 7.50138 5.22884 6.43893 5.68723 5.26188C5.98931 5.16803 6.4373 5.23846 7.03097 5.47274C7.62474 5.70713 8.05949 5.90792 8.33563 6.0744C8.61178 6.24082 8.83304 6.38185 8.99973 6.49623C9.96866 6.2255 10.9686 6.09011 11.9997 6.09011C13.0308 6.09011 14.031 6.2255 14.9999 6.49623L15.5937 6.12141C15.9997 5.87131 16.4791 5.64212 17.0309 5.43378C17.5829 5.22555 18.0051 5.16819 18.2969 5.26205C18.7655 6.43915 18.8072 7.50154 18.4216 8.44929C19.2445 9.33475 19.6562 10.4078 19.6562 11.6681C19.6562 12.5535 19.549 13.3371 19.3359 14.0195C19.1224 14.7019 18.8466 15.2484 18.5081 15.6601C18.1693 16.0717 17.7474 16.418 17.2423 16.6991C16.737 16.9804 16.2473 17.1834 15.7734 17.3085C15.2994 17.4336 14.7657 17.5277 14.172 17.5902C14.7134 18.0587 14.9842 18.7983 14.9842 19.8087V23.1052C14.9842 23.2925 15.0494 23.4488 15.1797 23.5738C15.3099 23.6985 15.5155 23.7352 15.7968 23.683C18.2137 22.8811 20.185 21.4358 21.7109 19.3472C23.2367 17.2588 23.9998 14.9075 23.9998 12.2927C23.9993 10.1162 23.4625 8.10873 22.3901 6.27021Z" fill="#999999"/>
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a target='_blanc' href='https://www.linkedin.com/in/%D0%B5%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B0-%D0%BD%D0%B8%D0%BA%D0%B8%D1%88%D0%B8%D0%BD%D0%B0-2b28341a6/'>
                            <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM8.51294 18.1406H5.59039V9.34808H8.51294V18.1406ZM7.05176 8.14746H7.03271C6.052 8.14746 5.41772 7.47235 5.41772 6.6286C5.41772 5.76581 6.07141 5.10938 7.07117 5.10938C8.07092 5.10938 8.68616 5.76581 8.7052 6.6286C8.7052 7.47235 8.07092 8.14746 7.05176 8.14746ZM19.051 18.1406H16.1288V13.4368C16.1288 12.2547 15.7057 11.4485 14.6483 11.4485C13.8409 11.4485 13.3601 11.9923 13.1488 12.5173C13.0715 12.7051 13.0527 12.9677 13.0527 13.2305V18.1406H10.1303C10.1303 18.1406 10.1686 10.173 10.1303 9.34808H13.0527V10.593C13.441 9.9939 14.1359 9.14172 15.6865 9.14172C17.6093 9.14172 19.051 10.3984 19.051 13.099V18.1406Z" fill="#999999"/>
                            </svg>
                        </a>
                        {/* VK */}
                        <a target='_blanc' href='https://vk.com/id137029270'>
                            <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.37281 0 0 5.37256 0 12C0 18.6274 5.37281 24 12 24C18.6272 24 24 18.6274 24 12C24 5.37256 18.6272 0 12 0ZM18.087 14.2978C18.6463 14.8441 19.2381 15.3583 19.7402 15.961C19.9626 16.2277 20.1723 16.5034 20.3319 16.8135C20.5597 17.2557 20.354 17.7406 19.9582 17.7669L17.4997 17.7664C16.8648 17.8189 16.3595 17.5628 15.9335 17.1287C15.5935 16.7828 15.278 16.4133 14.9505 16.0555C14.8167 15.9087 14.6757 15.7705 14.5078 15.6617C14.1726 15.4437 13.8815 15.5105 13.6895 15.8606C13.4938 16.2169 13.4491 16.6117 13.4304 17.0082C13.4037 17.5879 13.2288 17.7394 12.6472 17.7666C11.4044 17.8248 10.2251 17.6362 9.12908 17.0097C8.16221 16.457 7.41385 15.677 6.76174 14.7938C5.49189 13.0722 4.51937 11.1826 3.64554 9.23881C3.44888 8.80104 3.59276 8.56681 4.0757 8.55773C4.87808 8.54226 5.68045 8.54423 6.48282 8.55699C6.80937 8.56215 7.02543 8.74899 7.1509 9.05713C7.58449 10.1239 8.11605 11.1389 8.78216 12.0803C8.95967 12.3309 9.14087 12.5809 9.39892 12.7579C9.68372 12.9534 9.90077 12.8888 10.0351 12.5708C10.121 12.3688 10.1581 12.1527 10.1767 11.9361C10.2406 11.1944 10.2482 10.4529 10.1377 9.71415C10.069 9.25183 9.80894 8.95327 9.34809 8.86586C9.11337 8.82142 9.14774 8.73451 9.26191 8.60045C9.46005 8.36868 9.64567 8.22529 10.0167 8.22529L12.7943 8.2248C13.232 8.31073 13.3303 8.50715 13.3897 8.94811L13.3921 12.0348C13.387 12.2055 13.4778 12.7113 13.7842 12.823C14.0297 12.904 14.1918 12.7071 14.3386 12.5517C15.0047 11.8448 15.4793 11.0105 15.9043 10.147C16.0919 9.7662 16.2537 9.37213 16.4108 8.97733C16.5277 8.6854 16.7094 8.54177 17.0389 8.54668L19.7136 8.54987C19.7924 8.54987 19.8725 8.55061 19.9506 8.56411C20.4014 8.64121 20.5248 8.83517 20.3854 9.27491C20.1659 9.96581 19.7394 10.5413 19.3225 11.1183C18.8757 11.736 18.3991 12.3322 17.9567 12.9526C17.5501 13.5198 17.5822 13.8053 18.087 14.2978Z" fill="#999999"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div> 
        </CardContent>
    </Card>
)};

AboutUserItem.defaultProps = {
    aboutMe: {
        avatar_url: '/',
        name: 'Имя пользователя отсутсвует',
        bio: 'отсутсвует',
        html_url: 'https://github.com/'
    }
}

export default AboutUserItem;