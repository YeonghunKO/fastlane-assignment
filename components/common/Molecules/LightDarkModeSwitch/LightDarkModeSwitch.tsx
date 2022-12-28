import React, { useState } from 'react';
import * as S from './LightDarkModeSwitch.styles';
import Icon from '@components/common/Atoms/Icons/Icon';
import { useTheme } from 'styled-components';
import { useAtom } from 'jotai';
import { isDarkModeState } from 'store/isDarkModeAtoms';

const LightDarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeState);
  const [isToggled, setIsToggled] = useState(isDarkMode);
  const theme = useTheme();

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <S.Container>
      <Icon
        icon="Sun"
        size="1.3rem"
        color={isToggled ? theme.title : '#f6b91d'}
      />
      <S.ToggleSwitch>
        <S.Checkbox
          type="checkbox"
          checked={isToggled}
          onChange={handleToggle}
        />
        <S.Switch className="switch" />
      </S.ToggleSwitch>
      <Icon
        icon="Moon"
        size="1.2rem"
        color={isToggled ? '#0190de' : theme.title}
      />
    </S.Container>
  );
};

export default LightDarkModeSwitch;
