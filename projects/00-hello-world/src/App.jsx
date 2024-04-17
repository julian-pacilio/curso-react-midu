import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard'

export function App() {

    return (
        <section className='app'>
            <TwitterFollowCard 
                userName="midudev" 
                isFollowing
            >
                Miguel Ángel Durán
            </TwitterFollowCard>
            
            <TwitterFollowCard 
                userName="addyosmani" 
                isFollowing
            >                
                Addy Osmani
            </TwitterFollowCard>
            

            <TwitterFollowCard 
                userName="youyuxi" 
                isFollowing
            >
                Evan You
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName="kikobeats" 
                isFollowing={false}
            >
                Kiko Beats
            </TwitterFollowCard>

        </section>

    )
    
}