import { FlatList, Text } from 'react-native';
import { Container, Title } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';

export function Groups() {
    const [groups, setGroup] = useState<string[]>([]);

    return (
        <Container>
            <Header />
            <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <GroupCard title={item} />}
                ListEmptyComponent={() => (
                    <ListEmpty message="Que tal cadastrar a primeira turma?" />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
            />
        </Container>
    );
}
