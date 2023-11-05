type cardAttributes = {
    title: string,
    images: string[],
    text: string,
}
export const mainPageBestProjects: cardAttributes[] = [
    {
        title: 'Проект 1',
        text: 'Описание проекта 1',
        images: [
            'https://placehold.co/300x500',
            'https://placehold.co/1920x1080'
        ]
    },
    {
        title: 'Проект 2',
        text: 'Описание проекта 2',
        images: ['https://placehold.co/800x1000']
    }
]