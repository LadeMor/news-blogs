import Container from "../../components/container/Container";

import "./ArticleItem.css";

import avatar from "../../assets/images/Ellipse4.png";

import Fb from "../../assets/images/article-item/Fb.png";
import Tw from "../../assets/images/article-item/Tw.png";
import Pn from "../../assets/images/article-item/Pn.png";
import Be from "../../assets/images/article-item/Be.png";

const ArticleItem = () => {
    return(
        <Container width={860}>
             <section id="article-item">
                <div className="article-item-metadata">
                    <p>08.08.2021</p>
                    <span className="horizontal-line-article"></span>
                    <p>4 minutes</p>
                </div>
                <div className="article-item-content">
                    <p>
                    Seamlessly syndicate cutting-edge architectures rather than collaborative collaboration and idea-sharing. Proactively incubate visionary interfaces whereas premium benefits. Seamlessly negotiate ubiquitous leadership skills rather than parallel ideas. Dramatically visualize superior interfaces for best-of-breed alignments. Synergistically formulate performance based users through customized relationships. Interactively deliver cross-platform ROI via granular systems. Intrinsicly enhance effective initiatives vis-a-vis orthogonal outsourcing. Rapidiously monetize market-driven opportunities with multifunctional users. Collaboratively enhance visionary opportunities through revolutionary schemas. Progressively network just in time customer service without real-time scenarios.

Synergistically drive e-business leadership with unique synergy. Compellingly seize market positioning ROI and bricks-and-clicks e-markets. Proactively myocardinate timely platforms through distributed ideas. Professionally optimize enabled core competencies for leading-edge sources. Professionally enhance stand-alone leadership with innovative synergy. Rapidiously generate backend experiences vis-a-vis long-term high-impact relationships. Authoritatively supply market-driven mindshare and bricks-and-clicks opportunities. Holisticly create diverse innovation through adaptive communities. Efficiently empower seamless meta-services with impactful opportunities. Distinctively transition virtual outsourcing with focused e-tailers.

“ Monotonectally seize superior mindshare rather than efficient technology. ” 

Compellingly enhance seamless resources through competitive content. Continually actualize 24/365 alignments for resource-leveling platforms. Energistically enhance high standards in models and professional expertise. Intrinsicly iterate extensible metrics for prospective opportunities. Continually develop leading-edge experiences through quality e-services.
                    </p>
                </div>
                <div className="tag-list">
                    <div className="article-tag">ADVENTURE</div>
                    <div className="article-tag">PHOTO</div>
                    <div className="article-tag">DESIGN</div>
                </div>
                <hr/>
                <div className="article-author">
                    <div className="article-author-info">
                        <img src={avatar}/>
                        <div className="article-author-info-text">
                            <h5>By Jennifer Lawrence</h5>
                            <p>Thinker & Designer</p>
                        </div>
                    </div>
                    <div className="article-author-icons">
                        <img src={Fb} alt="Facebook logo"/>
                        <img src={Tw} alt="Twitter logo"/>
                        <img src={Pn} alt="Pinterest logo"/>
                        <img src={Be} alt="Behance logo"/>
                    </div>
                </div>
             </section>
        </Container>
    );
}

export default ArticleItem;

