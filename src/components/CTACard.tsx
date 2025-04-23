
import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";

const CTACard = () => (
  <div className="cta-card shadow-rich">
    <div className="cta-card-content">
      <h2 className="cta-headline fw-bold mb-3">
        Ready to Build Your Steel Success Story?
      </h2>
      <p className="cta-subtitle mb-4">
        Connect with us today and empower your next project with trusted expertise and quality materials.
      </p>
      <Link to="/contact" className="btn btn-light btn-lg px-4 d-inline-flex align-items-center cta-btn">
        <Mail className="me-2" size={20} />
        Get in Touch
        <ArrowRight className="ms-2" size={20} />
      </Link>
    </div>
  </div>
);

export default CTACard;
