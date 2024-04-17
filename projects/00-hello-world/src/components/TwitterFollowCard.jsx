export function TwitterFollowCard({ children, userName, isFollowing }) {

    const formatUserName = userName => `@${userName}`

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                src={`https://unavatar.io/${userName}`} alt={`Avatar ${name}`}/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                {
                    !isFollowing &&
                        <button className='tw-followCard-button'>Follow</button>
                }
                {
                    isFollowing &&
                    <button className='tw-followCard-button'>Unfollow</button>
                }
            </aside>
        </article>
    )
}