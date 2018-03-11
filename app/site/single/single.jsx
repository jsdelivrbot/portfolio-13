import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './../common_template/header';
import Footer from './../common_template/footer';
import CONSTS from './../../common/consts';
import { getProject } from './../../site/single/singleActions';

class Single extends Component {

	componentWillMount() {
		this.props.getProject(this.props.params.page);
    }

    render() {
		const project = this.props.single.project[0];
        return (
            <div id='wrapper' className="single">
                <Header />
                <main role="main" id="main">
                    <article className="post">
                        <header>
                            <div className="title">
                                <h2>{`${project.title}`}</h2>
                                <blockquote>{`${project.meta_description}`}</blockquote>
                            </div>
                            <div className="meta">
                                <a href="#" className="author"><span className="name">{`${project.category}`}</span><img src="./assets/images/avatar.jpg" alt="" /></a>
                            </div>
                        </header>
                        <figure className="image featured"><img src={`${CONSTS.IMAGE_PATH + project.folder_files}/${project.cover}`} alt={`${project.title}`} /></figure>
                        {`${project.description}`}
                        <div className="box alt">
                            <div className="row uniform">
                                <div className="12u$"><span className="image fit"><img src="./assets/images/pic02.jpg" alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src="./assets/images/pic04.jpg" alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src="./assets/images/pic05.jpg" alt="" /></span></div>
                                <div className="4u$"><span className="image fit"><img src="./assets/images/pic06.jpg" alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src="./assets/images/pic06.jpg" alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src="./assets/images/pic04.jpg" alt="" /></span></div>
                                <div className="4u$"><span className="image fit"><img src="./assets/images/pic05.jpg" alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src="./assets/images/pic05.jpg" alt="" /></span></div>
                                <div className="4u"><span className="image fit"><img src="./assets/images/pic06.jpg" alt="" /></span></div>
                                <div className="4u$"><span className="image fit"><img src="./assets/images/pic04.jpg" alt="" /></span></div>
                            </div>
                        </div>
                    </article>
                </main>
                <Footer />
            </div> 
        );
	}
}

const mapStateToProps = state => ({single: state.single});
const mapDispatchToProps = dispatch => bindActionCreators({getProject}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Single);