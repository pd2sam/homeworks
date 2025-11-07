import { useState, useCallback } from 'react';
import Button from '../../../shared/ui/Button/Buttons';

type Comment = {
    id: number;
    author: string;
    text: string;
};

const comments: Comment[] = [
    { id: 1, author: 'Иван', text: 'Отличный пост! Очень интересная тема.' },
    { id: 2, author: 'Мария', text: 'Согласна с автором. Хотелось бы увидеть больше примеров.' },
    { id: 3, author: 'Петр', text: 'Интересная точка зрения. Можно обсудить подробнее.' },
    { id: 4, author: 'Анна', text: 'Спасибо за полезную информацию!' },
];

const CommentList = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = useCallback(() => {
        setIsExpanded(prev => !prev);
    }, []);

    return (
        <div className="comment-list">
            <div className="comment-list-header">
                <h3>Комментарии ({comments.length})</h3>
                <Button onClick={toggleExpanded}>
                    {isExpanded ? 'Свернуть' : 'Развернуть'}
                </Button>
            </div>
            {isExpanded && (
                <div className="comment-list-content">
                    {comments.map(comment => (
                        <div key={comment.id} className="comment-item">
                            <div className="comment-author">{comment.author}</div>
                            <div className="comment-text">{comment.text}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentList;

