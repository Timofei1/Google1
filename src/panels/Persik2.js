import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import FixedLayout from '@vkontakte/vkui/dist/components/FixedLayout/FixedLayout';
import Tabs from '@vkontakte/vkui/dist/components/Tabs/Tabs';
import TabsItem from '@vkontakte/vkui/dist/components/TabsItem/TabsItem';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Game from '@vkontakte/icons/dist/28/game';
import { platform, IOS } from '@vkontakte/vkui';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { ListItem, ModalCard, Switch, Checkbox, Footer, Tooltip, Radio, Gallery, FormStatus, Header } from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator';
import Icon28Messages from '@vkontakte/icons/dist/28/messages';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28ReportOutline from '@vkontakte/icons/dist/28/report_outline';
import Icon28Mention from '@vkontakte/icons/dist/28/mention';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28KeyboardOutline from '@vkontakte/icons/dist/28/keyboard_outline';
import Icon32Gift from '@vkontakte/icons/dist/32/gift';
import Icon24Download from '@vkontakte/icons/dist/24/download';


import persik from '../img/persik.png';
import './Persik.css';

const osName = platform();
const MODAL_CARD_NOTIFICATIONS = 'notifications';
const Persik2 = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Дополнительно</PanelHeader>
		<Tabbar>
          <TabbarItem fill="#0000FF"
            onClick={go}
            data-to="home"
          ><Icon28ServicesOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik"
          ><Icon24Download width={30} height={30} /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik3"
          ><Icon28ArticleOutline /></TabbarItem>
          <TabbarItem
            onClick={go}
            data-to="persik2"
          ><Icon28SettingsOutline fill="#0000FF" /></TabbarItem>
        </Tabbar>
        
        <Group>
        <FormStatus title="С Новым Годом!" state="default">Разработчики приложения поздравляют вас в новым годом! Удачного использования приложения! Успехов!
      </FormStatus>
      
     
        <Header level="secondary">Ещё</Header>
        <Div>
        <Button size="xl" level="2" component="a" href="https://vk.com/topic-184075993_40901326" before={
          <Icon28KeyboardOutline />
        }>
        Есть свой TS3 сервер?
        </Button>
        <br/>
        <Button size="xl" level="2" component="a" href="https://vk.com/topic-184075993_40901322" before={
          <Icon28ServicesOutline />
        }>
        Обсуждение приложения
        </Button>
              <Separator style={{ margin: '12px 0' }} />

        <Button size="xl" level="2" component="a" href="https://vk.com/topic-184075993_40901328" before={
        <Icon28Mention />
      }>
     
      Оставить отзыв
      </Button>
      <br/>
      <Button size="xl" level="2" component="a" href="https://vk.me/id288498260" before={
        <Icon28ReportOutline />
      }>
     
      Нашли баг?
      </Button>
        </Div>
        </Group>

        {fetchedUser &&
    <Group title="Ваш профиль:">
      <ListItem
        before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
        description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
      >
        {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
      </ListItem>
    </Group>}

      <Group title="Обратная связь">
      
      <Cell
                  before={<Avatar size={72}
                  src="https://sun3-10.userapi.com/c855136/v855136589/18636c/1_D877Mj2bE.jpg" />}
                  size="l"
                  description="Разработчик"
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m" component="a" href="https://vk.me/id288498260">Написать</Button>
                      <Button size="m" level="secondary" style={{ marginLeft: 8 }} component="a" href="https://vk.com/id288498260">Перейти</Button>
                    </div>
                  }
                >
                  Тимофей Рылов</Cell>
      <Separator style={{ margin: '12px 0' }} />
      <Div style={{display: 'flex'}}>
      <center>
      &nbsp;
      &nbsp;
      
      <Button size="l" level="outline" component="a" href="https://vk.me/join/AJQ1dzctCBZLDTZrHs3h19Q5" before={
        <Icon28Messages />
      }>
     
      Беседа
      </Button>
      &nbsp;
      &nbsp;

      <Button size="l" level="outline" component="a" href="https://vk.cc/a8TT8i" before={
        <Icon28UsersOutline />
      }>
      Сообщество
      </Button>
      <br/>
      </center>
      </Div>
      </Group>
     

      <Footer>Версия: 1.0</Footer>
       <br/>
      <br/>
       <br/>
      <br/>

	</Panel>

);

Persik2.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),

  
};

export default Persik2;
