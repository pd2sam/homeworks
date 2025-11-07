import { useState, useCallback } from 'react';
import Button from '../../../shared/ui/Button/Buttons';

interface PostLengthFilterProps {
    onFilterChange: (minLength?: number, maxLength?: number) => void;
}

const PostLengthFilter = ({ onFilterChange }: PostLengthFilterProps) => {
    const [minLength, setMinLength] = useState<number | ''>('');
    const [maxLength, setMaxLength] = useState<number | ''>('');

    const handleMinChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        setMinLength(value);
        onFilterChange(
            value === '' ? undefined : Number(value),
            maxLength === '' ? undefined : Number(maxLength)
        );
    }, [maxLength, onFilterChange]);

    const handleMaxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        setMaxLength(value);
        onFilterChange(
            minLength === '' ? undefined : Number(minLength),
            value === '' ? undefined : Number(value)
        );
    }, [minLength, onFilterChange]);

    const handleReset = useCallback(() => {
        setMinLength('');
        setMaxLength('');
        onFilterChange(undefined, undefined);
    }, [onFilterChange]);

    return (
        <div className="post-length-filter">
            <h3>Фильтр по длине заголовка</h3>
            <div className="filter-controls">
                <div className="filter-input-group">
                    <label htmlFor="min-length">Минимальная длина:</label>
                    <input
                        id="min-length"
                        type="number"
                        min="0"
                        value={minLength}
                        onChange={handleMinChange}
                        placeholder="0"
                    />
                </div>
                <div className="filter-input-group">
                    <label htmlFor="max-length">Максимальная длина:</label>
                    <input
                        id="max-length"
                        type="number"
                        min="0"
                        value={maxLength}
                        onChange={handleMaxChange}
                        placeholder="∞"
                    />
                </div>
                <Button onClick={handleReset} variant="secondary" className="filter-reset">
                    Сбросить
                </Button>
            </div>
        </div>
    );
};

export default PostLengthFilter;


