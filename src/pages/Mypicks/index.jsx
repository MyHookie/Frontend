import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmHeader from '../../components/common/ConfirmHeader';
import leftIcon from '../../assets/icon/icon-arrow-left.png';
import Dialog from '../../components/Modal/Dialog';

function index() {
  const navigate = useNavigate();
  const goBackPage = () => {
    navigate(-1);
  };
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = (e) => {
    e.stopPropagation();
    setIsDialogOpen(!isDialogOpen);
  };

  const handleSubmit = () => {
    console.log('myPick 등록');
    goBackPage();
  };

  return (
    <div>
      <ConfirmHeader
        leftIcon={leftIcon}
        leftClick={goBackPage}
        rightClick={handleDialogOpen}
      />
      {isDialogOpen && (
        <Dialog
          handleClose={handleDialogOpen}
          handleSubmit={handleSubmit}
          dialogText="저장하시겠습니까?"
        />
      )}
    </div>
  );
}

export default index;
