import React from 'react';
import { Button, Dropdown, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from "react-icons/md";

import './style.css'

const DropdownBtn = () => {
  const { i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const items = [
    {
      key: '1',
      label: (
        <button onClick={() => changeLang('en')} className="dropdown-btn">
          English
        </button>
      ),
    },
    {
      key: '2',
      label: (
        <button onClick={() => changeLang('ru')} className="dropdown-btn">
          Русский
        </button>
      ),
    },
    {
      key: '3',
      label: (
        <button onClick={() => changeLang('uz')} className="dropdown-btn">
          O'zbek
        </button>
      ),
    },
  ];

  return (
    <Space wrap>
      <Dropdown menu={{ items }} placement="bottomRight">
        <Button className='main-btn' type="primary"> <MdLanguage /> </Button>
      </Dropdown>
    </Space>
  );
};

export default DropdownBtn;