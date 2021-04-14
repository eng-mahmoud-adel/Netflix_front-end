import { useState , useEffect} from "react";
import { NavLink } from "react-router-dom";
import OuterNavbar from "../../../components/OuterNavbar/OuterNavbar";
import Footer from "../../../components/Footer/Footer";
import BaseButton from '../../../components/Buttons/Buttons';
import PlanTypes from "../../../components/PlanTypes/PlanTypes";
import Table from 'react-bootstrap/Table'
import { connect } from "react-redux";
import './Plans.css';
import { chooseplan } from '../../../store/actions/payment';



function Plans({chooseplan, Plan}) {
    const [plan, setPlan] = useState(['Basic', 'Standard', 'Premium']);
    const [choosedPlan, setChoosedPlan] = useState('0');
    const BASIC_PLAN = "EGP120";
    const STANDARD_PLAN = "EGP165";
    const PREMIUM_PLAN = "EGP200";
    

    const choosePlan = (e, index) => {
        let allPlans = e.target.parentElement.children;
        for(let i = 0; i< allPlans.length; i++) {
            allPlans[i].classList.remove('active');
        }
        setChoosedPlan(index);

        if(e.target.id == plan[index]) {
            e.target.classList.add('active');
        }
        
    }
    
    useEffect(() => {
        console.log(Plan);
        switch (choosedPlan){
            case 0:
                return chooseplan({
                    plan_type: plan[choosedPlan],
                    price: 120
                })
            break;
            case 1:
                return chooseplan({
                    plan_type: plan[choosedPlan],
                    price: 165
                })
            break;
            case 2:
                return chooseplan({
                    plan_type: plan[choosedPlan],
                    price: 200
                })
        }
        console.log(Plan);

      });

    return(
        <div className="plans">
            <div className="mx-3 mx-md-5 mt-3">
                <OuterNavbar logo_login="true" to="/" />
            </div>

            <hr />

            <section className="settings mx-4">

                <div className="offset-md-1 offset-lg-2 mt-4">
                    <span>STEP <b>1</b> OF <b>3</b></span>
                    <h3 className="mb-4"><b>Choose the plan that’s right for you</b></h3>
                    <p>
                        <i className="fas fa-check text-danger mr-3"></i>
                        Watch all you want. Ad-free.
                    </p>

                    <p>
                        <i className="fas fa-check text-danger mr-3"></i>
                        Recommendations just for you.
                    </p>

                    <p>
                        <i className="fas fa-check text-danger mr-3"></i>
                        Change or cancel your plan anytime.
                    </p>
                </div>

                <div className="row offset-md-3 offset-lg-5 offset-xl-6 plan-list">
                    {plan.map((item, index) => (
                        <PlanTypes key={index} id={item} className={`plan-type mr-4 mr-sm-5 ${choosedPlan == '0' && index == 0 ? 'active': ''}`} onClick={(e) => choosePlan(e, index)}>{item}</PlanTypes>
                    ))}
                </div>

                <div className="container">
                    <Table responsive="xl">
                        <tbody>
                            <tr className="d-table-row d-sm-none">
                                <td className="border-top-0 d-table-cell d-sm-none">Monthly price</td>
                                <td className="border-top-0 d-none d-table-cell d-sm-none">Video quality</td>
                                <td className="border-top-0 d-none d-table-cell d-sm-none">Resolution</td>
                            </tr>
                            <tr>
                                <td className="border-top-0 d-none d-sm-table-cell first-row">Monthly price</td>
                                <td className={`border-top-0 ${choosedPlan == '0' ? 'choice': ''}`}>{BASIC_PLAN}</td>
                                <td className={`border-top-0 ${choosedPlan == '1' ? 'choice': ''}`}>{STANDARD_PLAN}</td>
                                <td className={`border-top-0 ${choosedPlan == '2' ? 'choice': ''}`}>{PREMIUM_PLAN}</td>
                            </tr>
                            <tr>
                                <td className="d-none d-sm-table-cell">Video quality</td>
                                <td className={`${choosedPlan == '0' ? 'choice': ''}`}>Good</td>
                                <td className={`${choosedPlan == '1' ? 'choice': ''}`}>Better</td>
                                <td className={`${choosedPlan == '2' ? 'choice': ''}`}>Best</td>
                            </tr>
                            <tr>
                                <td className="d-none d-sm-table-cell">Resolution</td>
                                <td className={`${choosedPlan == '0' ? 'choice': ''}`}>480p</td>
                                <td className={`${choosedPlan == '1' ? 'choice': ''}`}>1080p</td>
                                <td className={`${choosedPlan == '2' ? 'choice': ''}`}>4K+HDR</td>
                            </tr>
                            <tr>
                                <td className="d-none d-sm-table-cell">Watch on your TV, computer, mobile phone and tablet</td>
                                <td><i className={`fas fa-check mr-3 ${choosedPlan == '0' ? 'choice': ''}`}></i></td>
                                <td><i className={`fas fa-check mr-3 ${choosedPlan == '1' ? 'choice': ''}`}></i></td>
                                <td><i className={`fas fa-check mr-3 ${choosedPlan == '2' ? 'choice': ''}`}></i></td>
                            </tr>
                        </tbody>
                    </Table>

                    <div className="col-md-9 instructions">
                        <p className="text-muted">Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content available in HD, Full HD, Ultra HD or HDR. See Terms of Use for more details.</p>
                        <p className="text-muted">Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic.</p>
                    </div>
                </div>

                <div className="col-10 col-sm-7 col-md-6 col-lg-5 col-xl-4 mt-4 mx-auto button">
                    <NavLink to="payment" style={{width: '100%'}}>
                        <BaseButton color="btn-danger">Continue</BaseButton>
                    </NavLink>
                </div>
            </section>

            <footer>
                <Footer color="#efefef" >
                    {["FAQ","Help Center","Terms of Use", "Privacy","Cookie Preferences","Corporate Information"]}
                </Footer>
            </footer>
        </div>
    )
}

function mapStateToProps(state){
    return {
        Plan:state.payment.plan,
    }
};
const mapDispatchToProps = (dispatch) => ({
    chooseplan: (plan) => {
        dispatch(chooseplan(plan))
    }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Plans);
// export default Plans;
