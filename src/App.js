import './App.css';


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img
                    src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/buy-one-get-one-free-logo-design-template-08a90705dc649cb0fad947c571902c99_screen.jpg?ts=1610032698'/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a href="">Profile</a>
                </div>
                <div>
                    <a href="">Messages</a>
                </div>
                <div>
                    <a href="">News</a>
                </div>
                <div>
                    <a href="">Music</a>
                </div>
                <div>
                    <a href="">Settings</a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                    <img className={'contentImg'}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjg-hec6jMJyxB4GtjgUtzaxwau2UuTRqh9w&usqp=CAU"
                        alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;
