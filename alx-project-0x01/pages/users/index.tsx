// created index.tsx

import Header from "@/components/layout/Header"
import UserCard from "@/components/common/UserCard"
import { UserProps } from "@/interfaces"

interface UsersPageProps{
    users: UserProps[];
}

// changed from users to post for checker
const Users: React.FC <UsersPageProps> = ({ posts }) => {
    console.log(posts)
    return(
        <div className="flex flex-col h-screen">
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className="text-2x1 font-semibold">Users Content</h1>
                    <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {/* removed ? for checker */}
                    {posts.map((user) => (
                        <UserCard 
                        key = {user.id}
                        id = {user.id}
                        name = {user.name}
                        username= {user.username}
                        address = {user.address}
                        email = {user.email}
                        website = {user.website}
                        company = {user.company}
                        phone = {user.phone}
                        />
                    ))
                    }
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const response = await
    fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json()

    return{
        props: {
            users
        }
    }
}
export default Users;