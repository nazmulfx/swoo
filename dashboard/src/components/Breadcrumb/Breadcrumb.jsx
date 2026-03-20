import React from 'react';
import './Breadcrumb.css';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb-wrapper">
      <div className="container">
        <nav className="breadcrumb">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="separator">/</span>}
              {item.link ? (
                <Link to={item.link} className="breadcrumb-item link">
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumb-item active">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
