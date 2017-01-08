import React,{Component} from 'react';
import Posts from './posts/posts';

export default () => <div>
        <header className="jumbotron hero-spacer">
                <h1>Book Trading Club</h1>
                <p>First rule of Book Trading Club is don't talk about Book Trading Club!</p>
        </header>


        <div className="row">
                <div className="col-lg-12">
                        <h3>Latest Features</h3>
                </div>
        </div>
        <hr/>

        <div className="row text-center welcome-height">

                <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                                        <div className="caption">
                                                <p>
                                                        Catalogue your books online.</p>
                                        </div>
                        </div>
                </div>

                <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                                        <div className="caption">
                                                <p>See all books our user own.</p>
                                        </div>
                        </div>
                </div>

                <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                                        <div className="caption">
                                                <p>Request to borrow other users books.</p>
                                        </div>
                        </div>
                </div>

                <div className="col-md-3 col-sm-6 hero-feature">
                        <div className="thumbnail">
                                        <div className="caption">
                                                <p>Easily manage books and requests from your dashboard.</p>
                                        </div>
                        </div>
                </div>

        </div>
        <br/>
        <div className="row">
                <div className="col-lg-12">
                        <h3><center>List of All Books</center></h3>
                </div>
        </div>
        <hr/>

        <Posts />
</div>
