import React from 'react'
import {
    View,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    PanelHeaderButton,
    PanelHeaderContent,
    Avatar,
    Group,
    CardGrid,
    Card
} from '@vkontakte/vkui'

import Icon28MessageOutline from '@vkontakte/icons/dist/28/message_outline';

const App = () => {
    return (
        <View activePanel="brand">
            <Panel id="brand">
                <PanelHeader
                    left={<PanelHeaderBack />}
                    right={<PanelHeaderButton>{<Icon28MessageOutline />}</PanelHeaderButton>}
                >
                    <PanelHeaderContent
                        status="был в сети сегодня, в 18:46"
                        before={<Avatar size={36} src="https://sun9-22.userapi.com/c845421/v845421090/3ccf9/RAYHSLFvGeM.jpg" />}
                    >
                        Анатолий Васильев
                    </PanelHeaderContent>
                </PanelHeader>
                <Group separator="hide">
                    <CardGrid>
                        <Card size="l">
                            <div style={{ height: 96 }} />
                        </Card>
                        <Card size="m">
                            <div style={{ height: 96 }} />
                        </Card>
                        <Card size="m">
                            <div style={{ height: 96 }} />
                        </Card>
                        <Card size="s">
                            <div style={{ height: 96 }} />
                        </Card>
                        <Card size="s">
                            <div style={{ height: 96 }} />
                        </Card>
                        <Card size="s">
                            <div style={{ height: 96 }} />
                        </Card>
                        <Card size="l">
                            <div style={{ height: 96 }} />
                        </Card>
                    </CardGrid>
                </Group>
            </Panel>
        </View>
    );
}

export default App
