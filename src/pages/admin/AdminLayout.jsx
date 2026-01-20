
import { useEffect, useState } from 'react';
import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';
import './AdminLayout.css';

// Placeholder for now, can be expanded for sidebar/topbar
const AdminLayout = () => {
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setLoading(false);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            if (!session) {
                navigate('/bloginternal/login');
            }
        });

        return () => subscription.unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/bloginternal/login');
    };

    if (loading) return <div className="admin-loading">Loading...</div>;

    if (!session) {
        return <Navigate to="/bloginternal/login" replace />;
    }

    return (
        <div className="admin-layout">
            <header className="admin-header">
                <h1>Blog Admin</h1>
                <div className="admin-user-info">
                    <span>{session.user.email}</span>
                    <button onClick={handleLogout} className="admin-logout-btn">Logout</button>
                </div>
            </header>
            <main className="admin-content">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
