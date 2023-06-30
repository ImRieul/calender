import {getDays, getLastDay, getWeekCount} from '../../src/calender/daysInMonth';


describe('getLastDay', () => {
	it('test 2023. 6. 30', () => {
		const year: number = 2023;
		const month: number = 6;
		const result: number = 30;

		const lastDay: number = getLastDay(year, month);

		expect(lastDay).toBe(result);
	});

	it('test 2020. 2. 29', () => {
		const year: number = 2020;
		const month: number = 2;
		const result: number = 29;

		const lastDay: number = getLastDay(year, month);

		expect(lastDay).toBe(result);
	})
});

describe('getDays', () => {
	it('should return an array of days in the given month', () => {
		const year = 2022;
		const month = 7;
		const days = getDays(year, month);
		const firstDay = { day: 1, dayOfWeek: 5, week: 1 };
		const middleDay = { day: 16, dayOfWeek: 6, week: 3 };

		expect(days).toHaveLength(31);
		expect(days[0]).toEqual(firstDay);
		expect(days[15]).toEqual(middleDay);
	});

	it('should return an array of days in the given month for February of a leap year', () => {
		const year = 2024;
		const month = 2;
		const days = getDays(year, month);
		const firstDay = { day: 1, dayOfWeek: 4, week: 1 };
		const lastDay = { day: 29, dayOfWeek: 4, week: 5 };

		expect(days).toHaveLength(29);
		expect(days[0]).toEqual(firstDay);
		expect(days[28]).toEqual(lastDay);
	});

	it('should return an array of days in the given month for February of a non-leap year', () => {
		const year = 2022;
		const month = 2;
		const days = getDays(year, month);
		const firstDay = { day: 1, dayOfWeek: 2, week: 1 };
		const lastDay = { day: 28, dayOfWeek: 1, week: 5 };

		expect(days).toHaveLength(28);
		expect(days[0]).toEqual(firstDay);
		expect(days[27]).toEqual(lastDay);
	});
});

describe('getWeekCount', () => {
	it('should return the number of weeks in February 2022', () => {
		const year = 2022;
		const month = 2;
		const expectedWeekCount= 5;

		expect(getWeekCount(year, month)).toBe(expectedWeekCount);
	});

	it('should return the number of weeks in July 2022', () => {
		const year = 2022;
		const month = 7;
		const expectedWeekCount = 6;

		expect(getWeekCount(year, month)).toBe(expectedWeekCount);
	});

	it('should return the number of weeks in July 2023', () => {
		const year = 2023;
		const month = 7;
		const expectedWeekCount = 6;

		expect(getWeekCount(year, month)).toBe(expectedWeekCount);
	});
});