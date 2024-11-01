
const BASE_URL = `http://localhost:3000`


export const loginUser = (DB_USER, DB_PASS) => {
    return async dispatch => {
        try {
            const payload = {
                email: DB_USER,
                password: DB_PASS,
            };
            console.log('Request Payload:', payload);

            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error response from server:', errorData);
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await response.json();

            // Store access_token correctly
            localStorage.setItem('access_token', data.access_token);

            dispatch({
                type: 'user/login',
                payload: {
                    email: DB_USER,
                    access_token: data.access_token,
                },
            });
        } catch (error) {
            console.error('Error occurred during login:', error);
            throw error;
        }
    };
};


export const fetchPortfolios = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/portfolios`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'portfolios/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchOutput = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/outputs`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'output/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchRuangLingkup = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/ruanglingkups`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'ruangLingkup/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchCarousels = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/carousels`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'carousels/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const fetchNews = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/news`, {
                method: "GET",
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'news/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const createNews = (newsItem) => {
    return async dispatch => {
        try {
            const formData = new FormData();
            formData.append('judul', newsItem.judul);
            formData.append('isi', newsItem.isi);
            formData.append('gambar', newsItem.link_gambar);

            const response = await fetch(`${BASE_URL}/news`, {
                method: 'POST',
                body: formData,
                headers: {
                    "access_token": localStorage.getItem('access_token')
                },
            });

            if (!response.ok) {
                throw new Error('Failed to add News');
            }

            await response.json();
            dispatch(fetchNews()); // Refresh the event list
        } catch (error) {
            console.error('Error adding News:', error);
        }
    };
};

export const updateNews = (newsItem, newsId) => {
    console.log(newsItem, 'di action');
    
    return async (dispatch) => {
        dispatch({ type: 'UPDATE_NEWS_LOADING' }); // Dispatch loading action
        try {
            const formData = new FormData();
            formData.append('judul', newsItem.judul);
            formData.append('isi', newsItem.isi);
            if (newsItem.link_gambar) {
                formData.append('gambar', newsItem.link_gambar); // Correct key to match your backend
            }

            const response = await fetch(`${BASE_URL}/news/${newsId}`, {
                method: 'PUT',
                body: formData,
                headers: {
                    "access_token": localStorage.getItem('access_token') || ''
                },
            });

            if (!response.ok) {
                const errorData = await response.json(); // Fetch error details
                throw new Error(`Failed to update News: ${errorData.message}`);
            }

            const updatedNews = await response.json();
            dispatch({ type: 'news/update', payload: updatedNews }); // Dispatch successful update
            dispatch(fetchNews()); // Refresh the news list
            return updatedNews; // Optionally return the updated news item
        } catch (error) {
            console.error('Error updating News:', error);
            dispatch({ type: 'UPDATE_NEWS_ERROR', payload: error.message }); // Handle error
        } finally {
            dispatch({ type: 'UPDATE_NEWS_LOADING_COMPLETE' }); // Dispatch loading complete action
        }
    };
};





export const deleteNews = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/news/${id}`, {
                method: "DELETE",
                headers: {
                    "access_token": localStorage.getItem('access_token')
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete news');
            }

            dispatch({ type: 'news/delete', payload: id });
        } catch (error) {
            console.log(error.message);
        }
    };
};


export const fetchUsers = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/membertrx`, {
                method: "GET",
                headers: {
                    "access_token": localStorage.getItem('access_token')
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'users/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}